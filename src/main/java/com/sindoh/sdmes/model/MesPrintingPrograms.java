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
@Table(name="mes_printing_programs")
public class MesPrintingPrograms {
	@Id
	@GeneratedValue
	private Long id;


	@Column(name="system_id")
	private Long systemid;
	
	private String type;
	private String name;
	private String file;
	private String description;
	private String parameters;
	private String labels;
	private String attributes;
	private String contents;
	private String qrcode;

	@Column(name="used_operation")
	private String usedoperation;
	
	@Column(name="order_flag")
	private String orderflag;
	
	@Column(name="serial_flag")
	private String serialflag;

	@Column(name = "creation_date")
	private LocalDateTime creationdate = LocalDateTime.now();
	
	@Column(name = "created_by")
	private Long createdby;
	
	@Column(name = "last_update_date")
	private LocalDateTime lastupdatedate = LocalDateTime.now();

	@Column(name = "last_updated_by")
	private Long lastupdatedby;
	
	public MesPrintingPrograms(Long id) {
		this.id = id;
	}

	public MesPrintingPrograms() {
		
	}
	
}
