package com.sindoh.sdmes.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="mtl_lines")
public class MtlLines {
	@Id
	@Column(name="line_id")
	private Long id;
	
	@Column(length = 100, name="line_name")
	private String name;
	
	@Column(length = 1000, name="line_alias")
	private String alias;
	
	@Column(name="mfg_site_id")
	private Integer site;
	
	private String description;
	
	private LocalDateTime creation_date = LocalDateTime.now();
	private LocalDateTime last_update_date = LocalDateTime.now();
	private LocalDateTime disable_date;
	private String job_order_flag;
	private Integer default_tact_time;
	private Integer last_updated_by;
	private Integer created_by;
	
	public MtlLines(Long id) {
		this.id = id;
	}

	public MtlLines() {
		
	}
	
}
