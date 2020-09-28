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
@Table(name="mtl_routing_details_v")
@IdClass(MtlRoutingDetailsPK.class)
public class MtlRoutingDetailsView {
	@Id
	@Column(name = "routing_id")
	private Integer routingid;
	
	@Id
	@Column(name = "operation_id")
	private Integer operationid;

	private String operation_type;
	private String operation_desc;
	private String item_number;
	private String barcode_indicator;
	private String location;
	private Integer length;
	
	private Integer operation_seq;
	private String required_flag;
	private Date effective_date;
	private Date disable_date;
	private String production_count;
	
	private Date creation_date;
	private Date last_update_date;
	private Integer created_by;
	private Integer last_updated_by;
	
	public MtlRoutingDetailsView() {
		
	}
	
}
