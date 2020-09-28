package com.sindoh.sdmes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlRoutings;

@Repository
public interface MtlRoutingsRepository extends JpaRepository<MtlRoutings, Long> {
	MtlRoutings findByItemAndSite(String item, Integer site);	
}
