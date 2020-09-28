package com.sindoh.sdmes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sindoh.sdmes.model.MtlItemLabelRules;

@Repository
public interface MtlItemLabelRulesRepository extends JpaRepository<MtlItemLabelRules, Long> {
	 List<MtlItemLabelRules> findByItemid(Long id);
	 List<MtlItemLabelRules> findByItemidAndLabelnameAndUseattributenameNot(Long itemid, String name, String attr);
	 List<MtlItemLabelRules> findByItemidAndUseattributename(Long itemid, String attr);
	 MtlItemLabelRules findByItemidAndLabelnameAndUseattributename(Long itemid, String name, String attr);
	 List<MtlItemLabelRules> findByItemidAndLabelname(Long itemid, String name);
	 
	 @Modifying
	 @Transactional
	 void deleteById(Long id);
	 
}
