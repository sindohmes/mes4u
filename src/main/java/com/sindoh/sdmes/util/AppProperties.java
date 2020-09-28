package com.sindoh.sdmes.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class AppProperties {
	@Value("${sdmes.datasource.db}")
	private String db;
	
	public String getValue(String val) {
		if (val.equals("db")) {
			return db;
		}
		
		return null;		
	}
	
	public AppProperties() {
		
	}
}
