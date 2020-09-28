package com.sindoh.sdmes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.JobDispatches;

@Repository
public interface JobDispatchesRepository extends JpaRepository<JobDispatches, Long> {
}
