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
@Table(name="mtl_routings")
public class MtlRoutings {
	@Id
	@GeneratedValue
	@Column(name="routing_id")
	private Long id;
	
	@Column(name="assy_item_id")
	private Integer itemid;
	
	@Column(name="assy_item_number")
	private String item;
	
	private LocalDateTime creation_date = LocalDateTime.now();
	private LocalDateTime last_update_date = LocalDateTime.now();
	private Integer created_by;
	private Integer last_updated_by;
	
	@Column(name="routing_desc")
	private String desc;
	
	@Column(name="mfg_site_id")
	private Integer site;
	
	public MtlRoutings(Long id) {
		this.id = id;
	}

	public MtlRoutings() {
		
	}
	
}
