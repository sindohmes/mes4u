package com.sindoh.sdmes.service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.sindoh.sdmes.mapper.OperationMapper;
import com.sindoh.sdmes.repository.JobDispatchRepairDefectViewRepository;
import com.sindoh.sdmes.repository.JobDispatcheOpHistoriesViewRepository;
import com.sindoh.sdmes.repository.MesUserProfileRepository;
import com.sindoh.sdmes.repository.MtlPackingNumbersViewRepository;
import com.sindoh.sdmes.specification.JobDispatchOpHistoriesViewSpecs;
import com.sindoh.sdmes.util.Casting;
import com.sindoh.sdmes.model.JobDispatchOpHistoriesView;
import com.sindoh.sdmes.model.MtlPackingNumbersView;

@Service
public class OperationService {
	
	@Autowired
	private OperationMapper operationMapper;
	
	@Autowired
	JobDispatcheOpHistoriesViewRepository jobDispatcheOpHistoriesViewRepository;

	@Autowired
	MtlPackingNumbersViewRepository mpnvRepository;
	
	@Autowired
	JobDispatchRepairDefectViewRepository jobrepairRepository;
	
	@Autowired
	MesUserProfileRepository mupRepository;
	
	public List<Map<String, Object>> getPartStatus(Integer id){
		List<Map<String, Object>> list = operationMapper.getPartStatus(id);
		return list;
	}
	
	public List<Map<String, Object>> getOperationSettingList(Map<String, Object> params){
		List<Map<String, Object>> list = operationMapper.getOperationSettingList(params);
		return list;
	}

	public String getUserOperation(Map<String, Object> params){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userid", new BigDecimal((String)params.get("userid")));
		map.put("item", (String)params.get("item"));		
		operationMapper.getUserOperation(map);
		
		return (String)map.get("result");
	}
	
	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public void createUserOperation(Map<String, Object> map) {
		map.put("userid", new BigDecimal((Integer)map.get("userid")));
		map.put("seq", map.get("seq").toString());
		map.put("opid", map.get("opid").toString());
		operationMapper.createUserOperation(map);
	}
	
	@Transactional
	public void deleteUserOperation(Long userid) {
		try {
			mupRepository.updateByUserid(userid);		
		} catch(Exception e) {

		}
	}
	
	public String dispatchOpHisChk(Map<String, Object> map) {
		map.put("opid", new BigDecimal((Integer)map.get("opid")));
		map.put("lang", (String)map.get("lang"));
		map.put("item", (String)map.get("item"));
		map.put("serial", (String)map.get("serial"));
		String res = operationMapper.dispatchOpHisChk(map);
		
		return res;
	}
	
	public void createTraceOpHistory(Map<String, Object> map){
		map.put("opid", new BigDecimal((Integer)map.get("opid")));
		map.put("userid", new BigDecimal((Integer)map.get("userid")));

		operationMapper.createTraceOpHistory(map);
	}
	
	public void createInspectionOperation(Map<String, Object> params) {
		params.put("p_operation_id", BigDecimal.valueOf(Integer.parseInt(params.get("p_operation_id").toString())));
		params.put("p_user_id", BigDecimal.valueOf(Integer.parseInt(params.get("p_user_id").toString())));
		params.put("p_txn_date", java.sql.Date.valueOf(params.get("p_txn_date").toString()));
		
		operationMapper.createInspectionOperation(params);
	}	
	
	public List<Map<String, Object>> getInLineList(Map<String, Object> params){
		List<Map<String, Object>> list = operationMapper.getInLineList(params);
		return list;
	}

	public Map<String, Object> checkAssyBarcodeInfo(Map<String, Object> params){
		operationMapper.checkAssyBarcodeInfo(params);
		return params;
	}
	
	public List<MtlPackingNumbersView> getPacking(String packingNumber){
		List<MtlPackingNumbersView> list = operationMapper.getPacking(packingNumber);
		return list;
	}
		
	public Map<String,Object> insertPacking(Map<String, Object> params){
		params = Casting.MapCast(params);
		// Casting exception data, if this number is null then execute to make new number.
		if (params.get("packing_number_in").equals("")) {
			params.put("packing_number_in", null);
		}
		operationMapper.insertPacking(params);
		
		return params;
	}
	
	
	public Map<String,Object> cancelPacking(Map<String, Object> params){
		params = Casting.MapCast(params);
		operationMapper.cancelPacking(params);
		
		return params;
	}
	
	public Map<String,Object> printPacking(Map<String, Object> params){
		params = Casting.MapCast(params);
		operationMapper.printPacking(params);
		
		return params;
	}

	// Operation History List
	public Map<String, Object> getOpHistory(Map<String, Object> params){
		Map<String, Object> map = new HashMap<String, Object>();
		int page = Integer.parseInt((String)params.get("page")) - 1;
		int size = Integer.parseInt((String)params.get("limit"));
		
		Pageable pageable;
		
		if (params.get("sortprop") != null && params.get("sort") != null) {
			Sort sort = Sort.by((String)params.get("sortprop"));
			
			if (params.get("sort").equals("ascending")) {
				sort = sort.ascending();
			} else if (params.get("sort").equals("descending")) {
				sort = sort.descending();
			}
			
			pageable = PageRequest.of(page, size, sort);
		} else {
			pageable = PageRequest.of(page, size);
		}

		Page<JobDispatchOpHistoriesView> data = jobDispatcheOpHistoriesViewRepository.findAll(JobDispatchOpHistoriesViewSpecs.searchWith(params), pageable);
		map.put("items", data.getContent());
		map.put("total", data.getTotalElements());

		return map;
	}	

	// SOL - Scan Assy Barcode
	public void createOpHistory(Map<String, Object> params){
		operationMapper.createOpHistory(params);
	}
	
	// EOL - Scan Assy Barcode
	public void createEolHistory(Map<String, Object> params){
		operationMapper.createEolHistory(params);
	}
		
	public List<Map<String, Object>> getOpFailed(Map<String, Object> params){
		List<Map<String, Object>> list = operationMapper.getOpFailed(params);
		return list;
	}
	
	public void checkBoxBarcodeInfo(Map<String, Object> params){
		operationMapper.checkBoxBarcodeInfo(params);
    }
	
	public void createRepairOperation(Map<String, Object> params) {
		operationMapper.createRepairOperation(params);
	}
	
	public Map<String, Object> repairHistoryView(Map<String, Object> params) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("items", jobrepairRepository.findByAssyitemnumberAndSerialnumber(params.get("item").toString(), params.get("serial").toString()));
		return map;
	}
	
	public List<Map<String, Object>> getDefectCodes(Map<String, Object> params) {
		List<Map<String, Object>> list =  operationMapper.getDefectCodes(params);
		return list;
	}
	
	public List<Map<String, Object>> getRepairCodes(Map<String, Object> params) {
		List<Map<String, Object>> list =  operationMapper.getRepairCodes(params);
		return list;
	}			
}
