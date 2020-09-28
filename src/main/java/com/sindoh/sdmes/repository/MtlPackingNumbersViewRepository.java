package com.sindoh.sdmes.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlPackingNumbersView;

@Repository
public interface MtlPackingNumbersViewRepository extends JpaRepository<MtlPackingNumbersView, Long> {
	List<MtlPackingNumbersView> findByPackingNumber(String packingNumber);	
}
