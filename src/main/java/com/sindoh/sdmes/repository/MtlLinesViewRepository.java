package com.sindoh.sdmes.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlLinesView;

@Repository
public interface MtlLinesViewRepository extends JpaRepository<MtlLinesView, Long>, JpaSpecificationExecutor<MtlLinesView> {
	Page<MtlLinesView> findAll(Specification<MtlLinesView> spec, Pageable pageable);
}
