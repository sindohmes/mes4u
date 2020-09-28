package com.sindoh.sdmes.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.JobDispatchOpHistoriesView;

@Repository
public interface JobDispatcheOpHistoriesViewRepository extends JpaRepository<JobDispatchOpHistoriesView, Long>, JpaSpecificationExecutor<JobDispatchOpHistoriesView> {
	// SOL - Operation History
	@Query(value = "select * from job_dispatch_op_histories_v where operator_id = ?1 and operation_desc = ?2 and time_stamp >= date_trunc('day', now()) order by time_stamp desc, history_id desc",
		   nativeQuery = true)
	Page<JobDispatchOpHistoriesView> findBySolOpHistories(Integer id, String op, PageRequest pageRequest);
	
	// EOL - Operation History
	@Query(value = "select * from job_dispatch_op_histories_v where operator_id = ?1 and operation_type = ?2 and time_stamp >= date_trunc('day', now()) order by time_stamp desc, history_id desc",
		   nativeQuery = true)
	Page<JobDispatchOpHistoriesView> findByEolOpHistories(Integer id, String op, PageRequest pageable);
	
	
	Page<JobDispatchOpHistoriesView> findAll(Specification<JobDispatchOpHistoriesView> spec, Pageable pageable);
}
