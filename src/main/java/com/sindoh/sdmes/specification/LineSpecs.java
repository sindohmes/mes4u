package com.sindoh.sdmes.specification;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.sindoh.sdmes.model.MtlLinesView;

public class LineSpecs {
	public static Specification<MtlLinesView> searchWith(Map<String, Object> params) {
		return (Specification<MtlLinesView>) ((root, query, builder) -> {
			List<Predicate> predicate = getPredicateWithKeyword(params, root, builder);
			return builder.and(predicate.toArray(new Predicate[0]));
		});
	}
	
	public static List<Predicate> getPredicateWithKeyword(Map<String, Object> params, Root<MtlLinesView> root, CriteriaBuilder builder) {
		List<Predicate> predicate = new ArrayList<>();
		
		if (params.get("site") != null && !params.get("site").equals("")) {
			predicate.add(builder.equal(root.get("site"), Integer.parseInt((String)params.get("site"))));
		}
		
		if (params.get("name") != null && !params.get("name").equals("")) {
			predicate.add(builder.like(root.get("name"), "%"+(String)params.get("name")+"%"));
		}
		
		if (params.get("alias") != null && !params.get("alias").equals("")) {
			predicate.add(builder.like(root.get("alias"), "%"+(String)params.get("alias")+"%"));
		}
		
		return predicate;		
	}
	
}
