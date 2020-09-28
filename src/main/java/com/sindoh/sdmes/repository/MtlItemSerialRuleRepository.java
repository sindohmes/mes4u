package com.sindoh.sdmes.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlItemSerialRules;

@Repository
public interface MtlItemSerialRuleRepository extends JpaRepository<MtlItemSerialRules, Long>, JpaSpecificationExecutor<MtlItemSerialRules> {
	Page<MtlItemSerialRules> findAll(Specification<MtlItemSerialRules> spec, Pageable pageable);
	List<MtlItemSerialRules> findAll();
	MtlItemSerialRules findBySerialRuleDescription(String rule);
	List<MtlItemSerialRules> findBySerialRuleDescriptionLike(String item);
	
}