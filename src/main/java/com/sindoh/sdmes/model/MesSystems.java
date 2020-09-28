package com.sindoh.sdmes.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="mes_systems")
public class MesSystems {
	@Id
	@GeneratedValue
	private Long id;
	
	private String name;
	private String type;
	private String description;
	
	@Column(name="call_type")
	private String calltype;
	
	@Column(name="call_value")
	private String callvalue;

	@Column(name="call_proc")
	private String callproc;

	@Column(name="default_flag")
	private String defaultflag = "N";
	
	@Column(name = "creation_date")
	private LocalDateTime creationdate = LocalDateTime.now();
	
	@Column(name = "created_by")
	private Long createdby;
	
	@Column(name = "last_update_date")
	private LocalDateTime lastupdatedate = LocalDateTime.now();

	@Column(name = "last_updated_by")
	private Long lastupdatedby;
	
	@Column(name="disable_date")
	private LocalDateTime disabledate;
	
	public MesSystems(Long id) {
		this.id = id;
	}

	public MesSystems() {
		
	}
	
}
