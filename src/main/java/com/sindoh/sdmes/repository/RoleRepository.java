package com.sindoh.sdmes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.Roles;

@Repository
public interface RoleRepository extends JpaRepository<Roles, Long> {
	Optional<Roles> findByName(String name);
}