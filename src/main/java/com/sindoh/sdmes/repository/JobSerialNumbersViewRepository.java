package com.sindoh.sdmes.repository;

import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.JobSerialNumbersView;

@Repository
public interface JobSerialNumbersViewRepository extends JpaRepository<JobSerialNumbersView, Long> {
	List<JobSerialNumbersView> findByDispatchid(Integer id, Sort sort);
}
