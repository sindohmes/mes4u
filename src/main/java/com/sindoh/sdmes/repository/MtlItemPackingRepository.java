package com.sindoh.sdmes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sindoh.sdmes.model.MtlItemPackingRules;

@Repository
public interface MtlItemPackingRepository extends JpaRepository<MtlItemPackingRules, Long> {
	List<MtlItemPackingRules> findByItemid(Long id);
	
	 @Modifying
	 @Transactional
	 void deleteById(Long id);
	 
}
