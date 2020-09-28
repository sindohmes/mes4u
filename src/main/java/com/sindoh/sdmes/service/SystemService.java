package com.sindoh.sdmes.service;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sindoh.sdmes.mapper.SystemMapper;
import com.sindoh.sdmes.model.MesPrintingPrograms;
import com.sindoh.sdmes.model.MesSystems;
import com.sindoh.sdmes.model.MtlItemLabelRules;
import com.sindoh.sdmes.repository.MesPrintingProgramsRepository;
import com.sindoh.sdmes.repository.MesSystemsRepository;
import com.sindoh.sdmes.repository.MtlItemLabelRulesRepository;

import com.sindoh.sdmes.specification.MesPrintingProgramsSpecs;
import com.sindoh.sdmes.util.AppProperties;

@Service
public class SystemService {
	@Autowired
	private MesSystemsRepository msRepository;
	
	@Autowired
	private MesPrintingProgramsRepository mppRepository;
	
	@Autowired
	private MtlItemLabelRulesRepository milrRepository;
	
	@Autowired
	private SystemMapper systemMapper;
	
	@Autowired
	AppProperties appProperties;
	
	public List<MesSystems> getMesSystems(String type) {
		List<MesSystems> list = msRepository.findByTypeAndDisabledateIsNullOrderById(type);
		return list;
	}
	
	public void createMesSystems(MesSystems params) {
		msRepository.save(params);
	}
	
	public void updateMesSystems(MesSystems sys) {
		sys.setLastupdatedate(LocalDateTime.now());
		msRepository.save(sys);
	}
	
	public void deleteMesSystems(Long id) {
		MesSystems sys = msRepository.findById(id).get();
		sys.setDisabledate(LocalDateTime.now());
		msRepository.save(sys);
	}
	
	public MesSystems getPrintingProgramSystems(Long id) {
		Long systemid = mppRepository.findById(id).get().getSystemid();
		MesSystems sys = msRepository.findById(systemid).get(); 
		return sys;
	}
	
	public String callURLProc(String proc, List<String> params) {
		// Spring Parameter Apply
		for (int i=0; i < params.size(); i++) {
			if (params.get(i) != null && params.get(i).length() > 6 && params.get(i).substring(0,6).equals("spring")) {
				params.set(i, appProperties.getValue(params.get(i).substring(7)));				
			}
		}
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("proc", proc);
		map.put("params", params);
		
		String url = systemMapper.callProc(map);
		return url;
	}
	
	@Transactional
	public String callFileProc(String proc, List<String> params) {
		// Spring Parameter Apply
		for (int i=0; i < params.size(); i++) {
			if (params.get(i) != null && params.get(i).length() > 6 && params.get(i).substring(0,6).equals("spring")) {
				params.set(i, appProperties.getValue(params.get(i).substring(7)));				
			}
		}
		
		// Serial Range Parameter Setting
		// First Colon(:) contains parameter: keys
		// Next the key parameter: values
		Map<String, String> rangeParams = new HashMap<String, String>();
		
		for (int i=0; i < params.size(); i++) {
			if (params.get(i).contains(":")) {
				String[] keys = params.get(i).split(":");
				String[] vals = params.get(i+1).split(":");
				i++;
				
				for (int j=0; j < keys.length; j++) {
					rangeParams.put(keys[j], vals[j]);
				}
			}
		}
		
		List<Map<String, String>> list = systemMapper.serialList(rangeParams);
		List<String> result = new ArrayList<String>();
		
		// Loop List and call procedures
		for (int i=0; i < list.size(); i++) {
			List<String> listParams = new ArrayList<String>();
			for (int j=0; j < params.size(); j++) {
				if (!params.get(j).contains(":")) {
					listParams.add(params.get(j));
				}
			}
			
			int k=0;
			Map<String, String> m = list.get(i);
			for(String key : m.keySet()) {
				listParams.add(k, m.get(key));
				k++;				
			}
			
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("proc", proc);
			map.put("params", listParams);
			
			result.add(systemMapper.callProc(map)); 
		}		
		
		return String.join("\n", result);
	}
	
	public Map<String,Object> getMesPrintingPrograms(Map<String,Object> params) {
		Map<String, Object> map = new HashMap<String, Object>();
		int page = (Integer)params.get("page") - 1;
		int size = (Integer)params.get("limit");
		Sort sort = Sort.by((String)params.get("sortprop"));		
			
		if (params.get("sort") != null) {
			if (params.get("sort").equals("descending")) {
				sort = sort.descending();
			} else {
				sort = sort.ascending();
			}
		}
			
		Pageable pageable = PageRequest.of(page, size, sort);
		
		map.put("items",mppRepository.findAll(MesPrintingProgramsSpecs.searchWith(params), pageable));
		map.put("total", mppRepository.count());
		System.out.println(map);
		
		return map;		
	}
	
	public List<String> getMesPrintingGroupPrograms() {
		List<String> list = mppRepository.findGroupByName();
		return list;
	}
	
	public List<MesPrintingPrograms> getMesPrintingList(String name) {
		List<MesPrintingPrograms> list = mppRepository.findByName(name);
		return list;
	}
	
	public List<MesPrintingPrograms> getMesPrintingJobPrograms(Long id) {
		List<MtlItemLabelRules> milrs = milrRepository.findByItemidAndUseattributename(id, "FILE_NAME");
		List<MesPrintingPrograms> list = new ArrayList<MesPrintingPrograms>();
		
		for(MtlItemLabelRules milr: milrs) {
			MesPrintingPrograms mpp = mppRepository.findByFile(milr.getUseattributevalue());
			
			if (mpp != null && mpp.getOrderflag().equals("Y")) {
				list.add(mpp);
			}			
		}
		
		return list;
	}	

	public MesPrintingPrograms getMesPrintingOperationPrograms(String usedoperation, Long id) {		
		List<MtlItemLabelRules> milrs = milrRepository.findByItemidAndUseattributename(id, "FILE_NAME");
		MesPrintingPrograms val = new MesPrintingPrograms();
		System.out.println(milrs);
		
		for(MtlItemLabelRules milr: milrs) {
			try {
				MesPrintingPrograms mpp = mppRepository.findByFile(milr.getUseattributevalue());
				System.out.println(mpp);
				if (mpp.getUsedoperation().equals(usedoperation)) {
					val = mpp;
					break;
				}
			} catch(NullPointerException e) {
				
			}
		}
		
		return val;
	}
	
	public void createMesPrintingPrograms(MesPrintingPrograms params) {
		mppRepository.save(params);
	}
	
	public void updateMesPrintingPrograms(MesPrintingPrograms val) {
		val.setLastupdatedate(LocalDateTime.now());
		mppRepository.save(val);
	}
	
	public void deleteMesPrintingPrograms(Long id) {
		mppRepository.deleteById(id);		
	}
	
	@Transactional
	public void writeLog(Map<String, Object> params) {
		String pathstr = "logs/";
		Path path = Paths.get(pathstr);
				
		try {
			if (!Files.exists(path)) {
				Files.createDirectory(path);
			}
		} catch(Exception e) {
			e.getStackTrace();
		}
		
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
		java.util.Date currentDate = new java.util.Date();
		String filename = "logs_" + format.format(currentDate) + ".txt";

		try {
			String filestr = pathstr + filename;
			Path filePath = Paths.get(filestr);
			
			if (!Files.exists(filePath)) {
				Files.createFile(filePath);	
			}
			
			String data = "";
			for(String key: params.keySet()) {
				data = data + key + ":" + params.get(key) + "\t";
			}
			data = data + "\n";
			
			FileChannel fileChannel = FileChannel.open(filePath, StandardOpenOption.CREATE, StandardOpenOption.APPEND);
			Charset charset = Charset.forName("utf-8");
			ByteBuffer byteBuffer = charset.encode(data);
			fileChannel.write(byteBuffer);
			fileChannel.close();
			
		} catch(IOException e) {
			e.getStackTrace();
		}
		
	}
	
	public String readLog(String selectDate) {
		String data = "";
		
		try {
			String filestr = "logs/logs_" + selectDate + ".txt";
			Path filePath = Paths.get(filestr);

			if (!Files.exists(filePath)) {
				return "Not exist a file.";
			} else {
				FileChannel fileChannel = FileChannel.open(filePath, StandardOpenOption.READ);
				Charset charset = Charset.forName("utf-8");
				ByteBuffer byteBuffer = ByteBuffer.allocateDirect(100000);
				
				while (true) {
					int cnt = fileChannel.read(byteBuffer);
					if (cnt == -1) break;
					byteBuffer.flip();
					data += charset.decode(byteBuffer).toString();
					byteBuffer.clear();
				}
				fileChannel.close();
			}			
		} catch(Exception e) {
			e.getStackTrace();
		}
		
		return data;
	}
}