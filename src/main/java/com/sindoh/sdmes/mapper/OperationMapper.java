package com.sindoh.sdmes.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlPackingNumbersView;

@Repository
@Mapper
public interface OperationMapper {
	public List<Map<String, Object>> getPartStatus(Integer id);
	public List<Map<String, Object>> getOperationSettingList(Map<String, Object> param);
	public List<Map<String, Object>> getInLineList(Map<String, Object> param);
	public void getUserOperation(Map<String, Object> param);
	public String createUserOperation(Map<String, Object> param);
	public String dispatchOpHisChk(Map<String, Object> param);
	public void createTraceOpHistory(Map<String, Object> param);
	public void checkAssyBarcodeInfo(Map<String, Object> param);
	public void createInspectionOperation(Map<String, Object> param);
	public List<Map<String, Object>> getSolOpHistory(Map<String, Object> param);
	public void createOpHistory(Map<String, Object> param);
	public void createEolHistory(Map<String, Object> param);
	public List<MtlPackingNumbersView> getPacking(String packingNumber);
	public void insertPacking(Map<String,Object> map);
	public void cancelPacking(Map<String,Object> map);
	public void printPacking(Map<String,Object> map);
	
	public List<Map<String, Object>> getOpFailed(Map<String, Object> param);	
	public List<Map<String, Object>> getDefectCodes(Map<String, Object> params);	
	public List<Map<String, Object>> getRepairCodes(Map<String, Object> params);	
	public void checkBoxBarcodeInfo(Map<String, Object> params);	
	public void createRepairOperation(Map<String, Object> params);	

}
