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
@Table(name="job_dispatches_v")
public class JobDispatchesView {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="dispatch_id")
	private Long id;
	
	@Column(name="item_number")
	private String item;
	
	@Column(name="line_name")
	private String line;
	
	@Column(name="interfaced_wo_num")
	private String wo;
	
	@Column(name="product_family")
	private String family;
	
	@Column(name="serial_count")
	private String serialcount;

	@Column(name = "creation_date")
	private LocalDateTime creationdate;
	
	@Column(name = "created_by")
	private Long createdby;
	
	@Column(name = "last_update_date")
	private LocalDateTime lastupdatedate;

	@Column(name = "last_updated_by")
	private Long lastupdatedby;
	
	private String status;
	private Integer item_id;
	private Integer qty;
	private Integer line_id;
	private String start_date;
	
	@Column(name = "mfg_site_id")
	private Integer site;
	
	private LocalDateTime fixed_manufacturing_date;
	private LocalDateTime user_defined_prod_date;
	private String max_sn;
	private String min_sn;
	
	public JobDispatchesView(Long id) {
		this.id = id;
	}

	public JobDispatchesView() {
		
	}
	
}
