package com.sindoh.sdmes.specification;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.sindoh.sdmes.model.UsersView;

public class UserViewSpecs {
	public static Specification<UsersView> searchWith(Map<String, Object> params) {
		return (Specification<UsersView>) ((root, query, builder) -> {
			List<Predicate> predicate = getPredicateWithKeyword(params, root, builder);
			return builder.and(predicate.toArray(new Predicate[0]));
		});
	}
	
	public static List<Predicate> getPredicateWithKeyword(Map<String, Object> params, Root<UsersView> root, CriteriaBuilder builder) {
		List<Predicate> predicate = new ArrayList<>();
		
		if (params.get("role") != null && !params.get("role_id").equals("")) {
			predicate.add(builder.equal(root.get("role_id"), Integer.parseInt((String)params.get("role"))));
		}
		
		if (params.get("name") != null && !params.get("name").equals("")) {
			predicate.add(builder.like(root.get("name"), "%"+(String)params.get("name")+"%"));
		}
		
		if (params.get("organization") != null && !params.get("organization").equals("")) {
			predicate.add(builder.like(root.get("organization"), "%"+(String)params.get("organization")+"%"));
		}
		
		return predicate;		
	}
	
}
