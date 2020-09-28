package com.sindoh.sdmes.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import com.sindoh.sdmes.model.MtlItemMastersView;

@Repository
public interface MtlItemMastersViewRepository extends JpaRepository<MtlItemMastersView, Long>, JpaSpecificationExecutor<MtlItemMastersView> {
	List<MtlItemMastersView> findAll();
	Page<MtlItemMastersView> findByItemnumberLike(String item, Pageable pageable);
	
	Page<MtlItemMastersView> findAll(Pageable pageable);
	Page<MtlItemMastersView> findAll(Specification<MtlItemMastersView> spec, Pageable pageable);
}