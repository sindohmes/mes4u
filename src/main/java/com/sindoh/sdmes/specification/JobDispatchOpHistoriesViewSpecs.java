package com.sindoh.sdmes.specification;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.sindoh.sdmes.model.JobDispatchOpHistoriesView;

public class JobDispatchOpHistoriesViewSpecs {
	public static Specification<JobDispatchOpHistoriesView> searchWith(Map<String, Object> params) {
		return (Specification<JobDispatchOpHistoriesView>) ((root, query, builder) -> {
			List<Predicate> predicate = getPredicateWithKeyword(params, root, builder);
			return builder.and(predicate.toArray(new Predicate[0]));
		});
	}
	
	public static List<Predicate> getPredicateWithKeyword(Map<String, Object> params, Root<JobDispatchOpHistoriesView> root, CriteriaBuilder builder) {
		List<Predicate> predicate = new ArrayList<>();
		
		// datestart (00:00:00) ~ dateend (23:59:59)
		if (params.get("datestart") != null && !params.get("datestart").equals("")) {
			SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			Calendar cal = Calendar.getInstance();
			
			String fromDate = (String)params.get("datestart");
			String toDate = (String)params.get("dateend");
			
			Date datestart = new Date();
			Date dateend = new Date();
			try {
				datestart = dateFormat.parse(fromDate);
				dateend = dateFormat.parse(toDate);
				
				// dateend - 23:59:59
				cal.setTime(dateend);
				cal.add(Calendar.DATE, 1);
				cal.add(Calendar.MILLISECOND, -1);
				
				toDate = dateFormat.format(cal.getTime());
				dateend = dateFormat.parse(toDate);
				
			} catch (ParseException e) {
				e.printStackTrace();
			}
			
			predicate.add(builder.between(root.get("timeStamp"), datestart, dateend)) ;
		}
		
		
		if (params.get("userid") != null && !params.get("userid").equals("")) {
			predicate.add(builder.equal(root.get("operatorid"), Integer.parseInt((String)params.get("userid"))));
		}
		
		if (params.get("optype") != null && !params.get("optype").equals("")) {
			predicate.add(builder.like(root.get("optype"), "%"+(String)params.get("optype")+"%"));
		}
		
		if (params.get("nonoptype") != null && !params.get("nonoptype").equals("")) {
			predicate.add(builder.notLike(root.get("optype"), "%"+(String)params.get("nonoptype")+"%"));
		}
		
		if (params.get("itemNumber") != null && !params.get("itemNumber").equals("")) {
			predicate.add(builder.like(root.get("itemNumber"), "%"+(String)params.get("itemNumber")+"%"));
		}
		
		if (params.get("serialNumber") != null && !params.get("serialNumber").equals("")) {
			predicate.add(builder.like(root.get("serialNumber"), "%"+(String)params.get("serialNumber")+"%"));
		}
		
		if (params.get("dispatchOperationId") != null && !params.get("dispatchOperationId").equals("")) {
			predicate.add(builder.equal(root.get("dispatchOperationId"), Integer.parseInt((String)params.get("dispatchOperationId"))));
		}
		
		if (params.get("recentFlag") != null && !params.get("recentFlag").equals("All") && !params.get("recentFlag").equals("")) {
			predicate.add(builder.equal(root.get("recentFlag"), (String)params.get("recentFlag")));
		} else if (params.get("recentFlag") != null && params.get("recentFlag").equals("All")) {
		} else {
			predicate.add(builder.equal(root.get("recentFlag"), "Y"));		
		}
		
		if (params.get("dateFlag") != null && !params.get("dateFlag").equals("")) {
			predicate.add(builder.equal(root.get("dateFlag"), (String)params.get("dateFlag")));		
		}
		
		if (params.get("lineId") != null && !params.get("lineId").equals("")) {
			predicate.add(builder.equal(root.get("lineId"), Integer.parseInt((String)params.get("lineId"))));
		}
		
		if (params.get("lineName") != null && !params.get("lineName").equals("")) {
			predicate.add(builder.like(root.get("lineName"), "%"+(String)params.get("lineName")+"%"));
		}
		
		if (params.get("configIndicator") != null && !params.get("configIndicator").equals("")) {
			predicate.add(builder.like(root.get("configIndicator"), "%"+(String)params.get("configIndicator")+"%"));
		}
		
		if (params.get("productFamily") != null && !params.get("productFamily").equals("")) {
			predicate.add(builder.like(root.get("productFamily"), "%"+(String)params.get("productFamily")+"%"));
		}
		
		if (params.get("resultValue") != null && !params.get("resultValue").equals("")) {
			predicate.add(builder.like(root.get("resultValue"), "%"+params.get("resultValue").toString().toUpperCase()+"%"));
		}
		
		if (params.get("partItemNumber") != null && !params.get("partItemNumber").equals("")) {
			predicate.add(builder.like(root.get("partItemNumber"), "%"+(String)params.get("partItemNumber")+"%"));
		}
		
		if (params.get("partSerialNumber") != null && !params.get("partSerialNumber").equals("")) {
			predicate.add(builder.like(root.get("partSerialNumber"), "%"+(String)params.get("partSerialNumber")+"%"));
		}
		
		if (params.get("resultValue") != null && !params.get("resultValue").equals("")) {
			predicate.add(builder.like(root.get("resultValue"), "%"+(String)params.get("resultValue")+"%"));
		}
		
		if (params.get("userName") != null && !params.get("userName").equals("")) {
			predicate.add(builder.like(root.get("userName"), "%"+params.get("userName").toString().toUpperCase()+"%"));
		}
		
		if (params.get("operationDesc") != null && !params.get("operationDesc").equals("")) {
			predicate.add(builder.like(root.get("operationDesc"), "%"+params.get("operationDesc").toString().toUpperCase()+"%"));
		}
		
		return predicate;		
	}
}
