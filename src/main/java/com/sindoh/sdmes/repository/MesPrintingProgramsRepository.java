package com.sindoh.sdmes.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MesPrintingPrograms;

@Repository
public interface MesPrintingProgramsRepository extends JpaRepository<MesPrintingPrograms, Long> {
	public List<MesPrintingPrograms> findByType(String type);
	public List<MesPrintingPrograms> findByName(String name);
	public MesPrintingPrograms findByFile(String file);
	public List<MesPrintingPrograms> findByTypeAndOrderflag(String type, String flag);
	public MesPrintingPrograms findByUsedoperation(String usedoperation);
	Page<MesPrintingPrograms> findAll(Specification<MesPrintingPrograms> spec, Pageable pageable);

	@Query(value="select name from mes_printing_programs mpp where type = 'LABEL' group by 1", nativeQuery = true)
	List<String> findGroupByName();
	
	
}
