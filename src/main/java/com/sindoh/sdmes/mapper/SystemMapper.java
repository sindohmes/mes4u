package com.sindoh.sdmes.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface SystemMapper {
	public String callProc(Map<String, Object> map);
	public List<Map<String,String>> serialList(Map<String, String> map);
}
