package com.sindoh.sdmes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sindoh.sdmes.model.JobDispatchRepairDefectView;

@Repository
public interface JobDispatchRepairDefectViewRepository extends JpaRepository<JobDispatchRepairDefectView, Long> {
	
	 @Modifying
	 @Transactional
	 void deleteById(Long id);
	 
	 List<JobDispatchRepairDefectView> findByAssyitemnumberAndSerialnumber(String item, String serial);
}
