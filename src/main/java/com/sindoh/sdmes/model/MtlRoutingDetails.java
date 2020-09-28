package com.sindoh.sdmes.model;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="mtl_routing_details")
@IdClass(MtlRoutingDetailsPK.class)
public class MtlRoutingDetails {
	@Id
	@Column(name = "routing_id")
	private Integer routingid;
	
	@Id
	@Column(name = "operation_id")
	private Integer operationid;
	
	@Column(name = "operation_seq")
	private Integer seq;
	
	@Column(name = "required_flag")
	private String required;
	
	private Date effective_date;
	private String production_count;
	private Integer quantity_per_assembly;
	private Integer usage_rate_or_amount;
	private String uom;
	
	private Date creation_date;
	private Date last_update_date;
	private Integer created_by;
	private Integer last_updated_by;
	
	@Column(name="routing_desc")
	private String desc;
	
	@Column(name="mfg_site_id")
	private Integer site;
	
	public MtlRoutingDetails() {
		
	}
	
}
