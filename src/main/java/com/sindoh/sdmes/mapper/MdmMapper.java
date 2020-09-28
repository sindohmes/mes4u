package com.sindoh.sdmes.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface MdmMapper {
	public void insertRoutingDetails(Map<String, Object> map);
	public void updateRoutingDetails(Map<String, Object> map);
	public void deleteRoutingDetails(Map<String, Object> map);
	public List<Map<String, Object>> serialruleList(Map<String, Object> params);
	public List<Map<String, Object>> itemSelectList(Map<String, Object> params);

	public List<Map<String, Object>> getItemMasters(Map<String, Object> map);
	public List<Map<String, Object>> getRoutings(String item, String serial, String lang);
	
	public List<Map<String, Object>> getOperations(String operationType, String operationDesc, String itemNumber, String assyItemNumber);
	public List<Map<String, Object>> getOperationParts(int opId);
	public List<Map<String, Object>> getRoutings(int itemId);
	
	public void insertOperations(Map<String,Object> map);
	public void insertOperationParts(Map<String,Object> map);
	
	public void updateOperations(Map<String,Object> map);
	public void updateOperationParts(Map<String,Object> map);
	
	public void deleteOperations(Map<String,Object> map);
	public void deleteOperationParts(Map<String,Object> map);
	
	public List<Map<String,Object>> getOperationType(int mfgid);
	
	public void copyfromPacking(Map<String,Object> map);
	public void copyfromLabel(Map<String,Object> map);
	
}
