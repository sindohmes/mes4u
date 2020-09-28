package com.sindoh.sdmes.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.JobDispatchOperations;

@Repository
public interface JobDispatchOperationsRepository extends JpaRepository<JobDispatchOperations, Long> {
	List<JobDispatchOperations> findByDispatchid(Integer id, Sort sort);
	
	List<JobDispatchOperations> findByDispatchidAndDisabledateIsNull(Integer id, Sort sort);
}
