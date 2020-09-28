package com.sindoh.sdmes.specification;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.sindoh.sdmes.model.MesPrintingPrograms;

public class MesPrintingProgramsSpecs {
	public static Specification<MesPrintingPrograms> searchWith(Map<String, Object> params) {
		return (Specification<MesPrintingPrograms>) ((root, query, builder) -> {
			List<Predicate> predicate = getPredicateWithKeyword(params, root, builder);
			return builder.and(predicate.toArray(new Predicate[0]));
		});
	}
	
	public static List<Predicate> getPredicateWithKeyword(Map<String, Object> params, Root<MesPrintingPrograms> root, CriteriaBuilder builder) {
		List<Predicate> predicate = new ArrayList<>();
		
		if (params.get("name") != null && !params.get("name").equals("")) {
			predicate.add(builder.like(root.get("name"), "%"+(String)params.get("name")+"%"));
		}
		
		if (params.get("file") != null && !params.get("file").equals("")) {
			predicate.add(builder.like(root.get("file"), "%"+(String)params.get("file")+"%"));
		}
		
		return predicate;		
	}
	
}
