package com.sindoh.sdmes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MtlItemProductFamily;

@Repository
public interface MtlItemMastersFamilyRepository extends JpaRepository<MtlItemProductFamily, Long> {
	// Product Family
	@Query(value = "select product_family from mtl_item_masters where mfg_site_id = ?1 and product_family is not null group by product_family order by product_family",
		   nativeQuery = true)
	List<MtlItemProductFamily> findBySiteOrderByFamily(Integer site);
}
