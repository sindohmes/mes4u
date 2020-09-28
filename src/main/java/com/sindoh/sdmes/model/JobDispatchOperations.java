package com.sindoh.sdmes.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="job_dispatch_operations")
public class JobDispatchOperations {
	@Id
	@Column(name="dispatch_operation_id")
	private Long id;
	
	@Column(name="operation_seq_num")
	private Integer seq;
	
	@Column(name="required_flag")
	private String required;
	
	@Column(name="barcode_indicator")
	private String indicator;
	
	@Column(name="dispatch_id")
	private Integer dispatchid;
	
	@Column(name="operation_type")	
	private String optype;
	
	@Column(name="operation_desc")
	private String opdesc;
	
	@Column(name="part_item_number")
	private String partitem;
	
	@Column(name="barcode_type")
	private String barcodetype;
	
	@Column(name="unique_check")
	private String uniquecheck;
	
	@Column(name="disable_date")
	private LocalDateTime disabledate;
	
	@Column(name = "creation_date")
	private LocalDateTime creationdate = LocalDateTime.now();
	
	@Column(name = "created_by")
	private Long createdby;
	
	@Column(name = "last_update_date")
	private LocalDateTime lastupdatedate = LocalDateTime.now();

	@Column(name = "last_updated_by")
	private Long lastupdatedby;
	
	private String location;
	private Integer length;	
	
	public JobDispatchOperations(Long id) {
		this.id = id;
	}

	public JobDispatchOperations() {
		
	}
	
}
