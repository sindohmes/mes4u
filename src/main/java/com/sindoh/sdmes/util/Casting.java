package com.sindoh.sdmes.util;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;

public class Casting {
	public static Map<String, Object> MapCast(Map<String, Object> map) {
		for(String key : map.keySet()) {
			try {
				String typename = map.get(key).getClass().getName();
				
				if (typename == "java.lang.Integer") {
					map.put(key, new BigDecimal((Integer)map.get(key)));	
				}
			} catch(NullPointerException e) {
				map.put(key, "");
			}
		}
		
		return map;
	}
	
	public static Map<String, Object> MapCast(Map<String, Object> map, String[] typelist) {
		int idx = 0;
		
		for(String key : map.keySet()) {			
			String typename = map.get(key)!=null?map.get(key).getClass().getName():"null";
			
			if (typename == "null") {
				if (typelist[idx] == "D") {
					map.put(key, new BigDecimal(0));
				} else if (typelist[idx] == "I") {
					map.put(key, 0);
				} else if (typelist[idx] == "S") {
					map.put(key, "");
				} else if (typelist[idx] == "T") {
					map.put(key, LocalDateTime.now());					
				}
				
			} else if (typename == "java.lang.Integer") {
				if (typelist[idx] == "D") {
					map.put(key, new BigDecimal((Integer)map.get(key)));
				} else if (typelist[idx] == "S") {
					map.put(key, map.get(key).toString());
				}				
				
			} else if (typename == "java.lang.String") {
				if (typelist[idx] == "D") {
					map.put(key, new BigDecimal(Integer.parseInt((String)map.get(key))));
				} else if (typelist[idx] == "I") {
					map.put(key, Integer.parseInt((String)map.get(key)));
				}
			}
			
			idx++;			
		}
		return map;
	}
}
