package com.sindoh.sdmes.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlItemMasters;

@Repository
public interface MtlItemMastersRepository extends JpaRepository<MtlItemMasters, Long>, JpaSpecificationExecutor<MtlItemMasters> {
	List<MtlItemMasters> findAll();	
	MtlItemMasters findByItemnumber(String itemnumber);	
	Page<MtlItemMasters> findBySerialruleid(Long serialruleid, Pageable pageable);
	List<MtlItemMasters> findByItemnumberLikeOrItemdescriptionLike(String itemnumber, String itemdescription);
	
}