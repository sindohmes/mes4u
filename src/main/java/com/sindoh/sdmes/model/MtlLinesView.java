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
@Table(name="mtl_lines_v")
public class MtlLinesView {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="line_id")
	private Long id;
	
	@Column(length = 100, name="line_name")
	private String name;
	
	@Column(length = 1000, name="line_alias")
	private String alias;
	
	@Column(name="mfg_site_id")
	private Integer site;
	
	@Column(length = 100, name="site_name")
	private String siteName;
	
	@Column(length = 100, name="user_name")
	private String manager;
	
	private String description;
	private LocalDateTime creation_date;
	private LocalDateTime disable_date;
	private String job_order_flag;
	private Integer default_tact_time;
	private Integer last_updated_by;
	private Integer created_by;
	
	public MtlLinesView(Long id) {
		this.id = id;
	}

	public MtlLinesView() {
		
	}
	
}
