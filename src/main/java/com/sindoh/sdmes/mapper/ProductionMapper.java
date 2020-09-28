package com.sindoh.sdmes.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface ProductionMapper {
	public void createJobDispatch(Map<String, Object> params);	
	public void createJobSerialNumbers(Map<String, Object> params);	
	public void cancelJobSerialNumbers(Map<String, Object> params);	
	public void createJobDpOperations(Map<String, Object> params);
	public String getSerialnumStatus(Map<String, Object> param);
	
}
