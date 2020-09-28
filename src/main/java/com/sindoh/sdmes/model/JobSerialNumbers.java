package com.sindoh.sdmes.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="job_serial_numbers")
public class JobSerialNumbers {
	@Id
	@Column(name="serial_number_id")
	private Long id;
	
	@Column(name="serial_sequence_number")
	private Integer seq;
	
	@Column(name="config_indicator")
	private String barcode;
	
	@Column(name="dispatch_id")
	private Integer dispatchid;
	
	@Column(name="item_number")
	private String item;
	
	@Column(name="serial_number")
	private String serial;
	
	public JobSerialNumbers(Long id) {
		this.id = id;
	}

	public JobSerialNumbers() {
		
	}
	
}
