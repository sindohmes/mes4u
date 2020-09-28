package com.sindoh.sdmes.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="mtl_packing_numbers_v")
public class MtlPackingNumbersView {

	@Id
	@Column(name="packing_id")
	private int id;
	
	@Column(name="packing_number")
	private String packingNumber;
	
	@Column(name="content_number")
	private String contentNumber;
	
	@Column(name="item_number")
	private String item;
	
	@Column(name="packing_type")
	private String type;
	
	private String status;
	
	@Column(name="packing_qty")
	private String targetCount;
}
