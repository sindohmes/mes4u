package com.sindoh.sdmes.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.JobDispatchesView;

@Repository
public interface JobDispatchesViewRepository extends JpaRepository<JobDispatchesView, Long>, JpaSpecificationExecutor<JobDispatchesView> {
	Page<JobDispatchesView> findAll(Specification<JobDispatchesView> spec, Pageable pageable);
	
	Page<JobDispatchesView> findAll(Pageable pageable);
}
