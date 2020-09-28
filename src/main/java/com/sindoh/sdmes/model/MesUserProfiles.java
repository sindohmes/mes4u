package com.sindoh.sdmes.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="mes_user_profiles")
public class MesUserProfiles {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_profile_id")
	private Long id;
	
	@Column(name="mes_user_id")	
	private String userid;
	
	@Column(name="profile_name")
	private String profileName;
	
	@Column(name = "profile_value")
	private Integer profileValue;
	
	@Column(name = "profile_value2")
	private Integer profileValue2;
	
	@Column(name = "profile_value3")
	private Integer profileValue3;
	
	@Column(name = "recent_flag")
	private String recentFlag;
	
	@Column(name = "creation_date")
	private LocalDateTime creationdate;
	
	@Column(name = "created_by")
	private Long createdby;
	
	@Column(name = "last_update_date")
	private LocalDateTime lastupdatedate;

	@Column(name = "last_updated_by")
	private Long lastupdatedby;
	
	public MesUserProfiles(Long id) {
		this.id = id;
	}
	
	public MesUserProfiles() {
		
	}
	
}
