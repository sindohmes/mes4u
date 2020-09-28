package com.sindoh.sdmes.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlRepairCodes;

@Repository
public interface MtlRepairCodesRepository extends JpaRepository<MtlRepairCodes, Integer> {
	
	public Page<MtlRepairCodes> findByParentCodeLv1AndCode(String codeLevel, String Code, Pageable pageable);
	public Page<MtlRepairCodes> findByParentCodeLv1(String codeLevel, Pageable pageable);
	public Page<MtlRepairCodes> findByCode(String code, Pageable pageable);
	public Page<MtlRepairCodes> findByCodeLevel(int codeLevel, Pageable pageable);	
}
