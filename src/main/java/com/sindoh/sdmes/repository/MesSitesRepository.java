package com.sindoh.sdmes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MesSites;

@Repository
public interface MesSitesRepository extends JpaRepository<MesSites, Long> {
}
