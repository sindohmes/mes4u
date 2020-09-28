package com.sindoh.sdmes.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlRoutingDetailsView;

@Repository
public interface MtlRoutingDetailsViewRepository extends JpaRepository<MtlRoutingDetailsView, Long> {
	List<MtlRoutingDetailsView> findByRoutingid(Integer id);	
}
