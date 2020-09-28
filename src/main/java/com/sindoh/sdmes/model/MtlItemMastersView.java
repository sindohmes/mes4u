package com.sindoh.sdmes.model;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="mtl_item_masters_v")
public class MtlItemMastersView {

	@Id
	@Column(name = "item_id")
	private Long id;
	
	@Column(name = "item_number")
	private String itemnumber;
	
	@Column(name = "item_description")
	private String itemdescription;
	
	@Column(name = "item_type")
	private String itemtype;
	
	@Column(name = "product_family")
	private String productfamily;
	
	private String separator;
	
	@Column(name = "gross_weight")
	private Long grossweight;
	
	@Column(name = "net_weight")
	private Long netweight;
	
	@Column(name = "customer_item_number1")
	private String customeritemnumber1;
	
	@Column(name = "customer_item_number2")
	private String customeritemnumber2;
	
	@Column(name = "customer_item_number3")
	private String customeritemnumber3;
	
	@Column(name = "end_number")
	private Long endnumber;
	
	@Column(name = "serial_rule_id")
	private Long serialruleid;
	
	@Column(name = "serial_rule_description")
	private String serialruledescription;
	
	@Column(name = "prefix_type")
	private String prefixtype;
	
	@Column(name = "team_code")
	private String teamcode;
	
	@Column(name = "mfg_site_id")
	private Integer site;
	
	private String status;
	private String comments;
	
	@Column(name = "creation_date")
	private LocalDateTime creationdate;
	
	@Column(name = "last_update_date")
	private LocalDateTime lastupdatedate;

	@Column(name = "created_by")
	private Long createdby;
	
	@Column(name = "created_by_desc")
	private String createdbydesc;
	
	@Column(name = "last_updated_by")
	private Long lastupdatedby;
	
	@Column(name = "last_updated_by_desc")
	private String lastupdatedbydesc;
	
	public MtlItemMastersView(Long id) {
		this.id = id;
	}
	public MtlItemMastersView() {
		
	}
}
