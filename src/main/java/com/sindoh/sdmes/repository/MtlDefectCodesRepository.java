package com.sindoh.sdmes.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlDefectCodes;

@Repository
public interface MtlDefectCodesRepository extends JpaRepository<MtlDefectCodes, Integer> {
	
	
	//select * from mtl_defect_codes mdc where parent_code_lv1 = :toplevelcode and defect_code = :code
	public Page<MtlDefectCodes> findByParentCodeLv1OrCode(String codeLevel, String code, Pageable pageable);
	public Page<MtlDefectCodes> findByParentCodeLv1AndCode(String codeLevel, String code, Pageable pageable);
	public Page<MtlDefectCodes> findByParentCodeLv1(String codeLevel, Pageable pageable);
	public Page<MtlDefectCodes> findByCode(String code, Pageable pageable);
	public Page<MtlDefectCodes> findByCodeLevel(int codeLevel, Pageable pageable);	
}
