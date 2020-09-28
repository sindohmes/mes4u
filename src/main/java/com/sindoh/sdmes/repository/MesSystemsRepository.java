package com.sindoh.sdmes.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MesSystems;

@Repository
public interface MesSystemsRepository extends JpaRepository<MesSystems, Long> {
	List<MesSystems> findByTypeAndDisabledateIsNullOrderById(String type);
}
