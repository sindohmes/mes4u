package com.sindoh.sdmes.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sindoh.sdmes.model.MesUserProfiles;

@Repository
public interface MesUserProfileRepository extends JpaRepository<MesUserProfiles, Long> {
	@Modifying
	@Query(value="update mes_user_profiles set recent_flag = 'N' where mes_user_id = ?1", nativeQuery = true)
	public void updateByUserid(Long userid);
}
