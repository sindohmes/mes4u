package com.sindoh.sdmes.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlRoutingDetails;

@Repository
public interface MtlRoutingDetailsRepository extends JpaRepository<MtlRoutingDetails, Long> {
	List<MtlRoutingDetails> findByRoutingid(Integer id);	
}
