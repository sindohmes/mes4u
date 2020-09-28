package com.sindoh.sdmes.service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sindoh.sdmes.mapper.ProductionMapper;
import com.sindoh.sdmes.model.JobDispatchOperations;
import com.sindoh.sdmes.model.JobDispatches;
import com.sindoh.sdmes.model.JobDispatchesView;
import com.sindoh.sdmes.model.JobSerialNumbersView;
import com.sindoh.sdmes.model.MtlLines;
import com.sindoh.sdmes.repository.JobDispatchOperationsRepository;
import com.sindoh.sdmes.repository.JobDispatchesRepository;
import com.sindoh.sdmes.repository.JobDispatchesViewRepository;
import com.sindoh.sdmes.repository.JobSerialNumbersViewRepository;
import com.sindoh.sdmes.repository.MtlLinesRepository;
import com.sindoh.sdmes.specification.JobDispatchesViewSpecs;
import com.sindoh.sdmes.util.Casting;

@Service
public class ProductionService {
	@Autowired
	JobDispatchesViewRepository jdvRepository;
	
	@Autowired
	private ProductionMapper productionMapper;

	@Autowired
	JobDispatchesRepository jdRepository;
	
	@Autowired
	JobSerialNumbersViewRepository jsnRepository;
	
	@Autowired
	JobDispatchOperationsRepository jdoRepository;
	
	@Autowired
	MtlLinesRepository lineRepository;
	
	public Map<String, Object> getJobDispatchesView(Map<String, Object> params) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		int page = Integer.parseInt((String)params.get("page")) - 1;
		int size = Integer.parseInt((String)params.get("limit"));		
		Sort sort = Sort.by("id").descending();
		Pageable pageable = PageRequest.of(page, size, sort);
		
		Page<JobDispatchesView> data = jdvRepository.findAll(JobDispatchesViewSpecs.searchWith(params), pageable); 
		map.put("items", data.getContent());
		map.put("total", data.getTotalElements());
		return map;		
	}
	
	public void updateJobDispatches(Map<String, Object> params, Long id) {
		JobDispatches job = jdRepository.findById(id).get();		
		MtlLines line = lineRepository.findByName((String)params.get("line"));
		job.setLineid(line.getId());
		jdRepository.save(job);
	}

	public List<JobSerialNumbersView> getJobSerialNumbers(String id) {
		Sort sort = Sort.by("serial");
		List<JobSerialNumbersView> list = jsnRepository.findByDispatchid(Integer.parseInt(id), sort);
		
		return list;
	}

	public List<JobDispatchOperations> getJobDispatchOperations(Map<String, Object> params) {
		List<JobDispatchOperations> list;
		Integer id = Integer.parseInt((String)params.get("id"));
		Boolean flag = Boolean.parseBoolean((String)params.get("flag"));
		Sort sort = Sort.by("seq").and(Sort.by("id"));
		
		if (flag) {
			list = jdoRepository.findByDispatchid(id, sort);			
		} else {
			list = jdoRepository.findByDispatchidAndDisabledateIsNull(id, sort);			
		}
		return list;
	}
	
	public void updateJobDispatchOperations(JobDispatchOperations jdo) {
		jdo.setLastupdatedate(LocalDateTime.now());
		jdoRepository.save(jdo);
	}
	
	public void deleteJobDispatchOperations(Long id) {
		JobDispatchOperations jdo = jdoRepository.findById(id).get();
		jdo.setDisabledate(LocalDateTime.now());		
		jdoRepository.save(jdo);		
	}
	
	public void createJobDispatch(Map<String, Object> params) {
		params = Casting.MapCast(params);
		productionMapper.createJobDispatch(params);
	}
	
	public void createJobSerialNumbers(Map<String, Object> params) {
		params = Casting.MapCast(params);
		productionMapper.createJobSerialNumbers(params);		
	}
	
	public void cancelJobSerialNumbers(Map<String, Object> params) {
		params = Casting.MapCast(params);
		productionMapper.cancelJobSerialNumbers(params);
	}
	
	public void createJobDpOperations(Map<String, Object> params) {
		params = Casting.MapCast(params);
		productionMapper.createJobDpOperations(params);
	}
	
	public String getSerialnumStatus(Map<String, Object> map) {		
		String status = productionMapper.getSerialnumStatus(map);
		return status;
	}
	
	
}
