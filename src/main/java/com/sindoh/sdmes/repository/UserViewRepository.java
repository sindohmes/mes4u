package com.sindoh.sdmes.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.UsersView;

@Repository
public interface UserViewRepository extends JpaRepository<UsersView, Long> {
	Page<UsersView> findAll(Specification<UsersView> spec, Pageable pageable);

}
