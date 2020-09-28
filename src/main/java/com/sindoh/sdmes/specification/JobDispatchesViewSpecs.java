package com.sindoh.sdmes.specification;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.sindoh.sdmes.model.JobDispatchesView;


public class JobDispatchesViewSpecs {
	public static Specification<JobDispatchesView> searchWith(Map<String, Object> params) {
		return (Specification<JobDispatchesView>) ((root, query, builder) -> {
			List<Predicate> predicate = getPredicateWithKeyword(params, root, builder);
			return builder.and(predicate.toArray(new Predicate[0]));
		});
	}
	
	public static List<Predicate> getPredicateWithKeyword(Map<String, Object> params, Root<JobDispatchesView> root, CriteriaBuilder builder) {
		List<Predicate> predicate = new ArrayList<>();
		
		if (params.get("item") != null && !params.get("item").equals("")) {
			predicate.add(builder.like(root.get("item"), "%"+(String)params.get("item")+"%"));
		}
		
		if (params.get("line") != null && !params.get("line").equals("")) {
			predicate.add(builder.equal(root.get("line_id"), Integer.parseInt((String)params.get("line"))));
		}
		
		if (params.get("wo") != null && !params.get("wo").equals("")) {
			predicate.add(builder.equal(root.get("wo"), (String)params.get("wo")));
		}
		
		if (params.get("id") != null && !params.get("id").equals("")) {
			predicate.add(builder.equal(root.get("id"), (String)params.get("id")));
		}
		
		if (params.get("serialcheck") != null && !params.get("serialcheck").equals("All")) {
			predicate.add(builder.equal(root.get("serialcheck"), (String)params.get("serialcheck")));
		}

		if (params.get("status") != null && !params.get("status").equals("All")) {
			predicate.add(builder.equal(root.get("status"), (String)params.get("status")));
		}
		
		predicate.add(builder.greaterThanOrEqualTo(root.get("start_date"), (String)params.get("datestart")));
		predicate.add(builder.lessThan(root.get("start_date"), (String)params.get("dateend")));
		
		return predicate;		
	}
	
}
