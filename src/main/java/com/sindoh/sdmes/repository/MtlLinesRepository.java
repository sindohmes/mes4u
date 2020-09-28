package com.sindoh.sdmes.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlLines;

@Repository
public interface MtlLinesRepository extends JpaRepository<MtlLines, Long> {
	MtlLines findByName(String name);	
	List<MtlLines> findBySiteOrderByName(Integer site);
}
