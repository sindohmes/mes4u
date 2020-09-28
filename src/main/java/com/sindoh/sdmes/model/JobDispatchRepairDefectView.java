package com.sindoh.sdmes.model;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
@Table(name="job_dispatch_repair_defect_v")
public class JobDispatchRepairDefectView {
	
	@Id
	@Column(name = "history_id")
	private Long id;
	
	@Column(name = "assy_item_number")
	private String assyitemnumber;

	@Column(name = "serial_number")
	private String serialnumber;
	
	private String operation;
	
	private String inspection;
	
	@Column(name = "tdegree")
	private String severity;
	
	@Column(name = "defect_type") 
	private String defecttype;
	
	@Column(name = "defect_code")
	private String defectcode;
	
	@Column(name = "subsystem_code")
	private String subsystemcode;
	
	@Column(name = "repair_code")
	private String repaircode;
	
	@Column(name = "part_number")
	private String partnumber;
	
	@Column(name = "part_barcode")
	private String partbarcode;
	
	@Column(name = "fault_code")
	private String faultcode;
	
	private String comments;
	
	private String pagecount;
	
	@Column(name = "total_pagecount")
	private String totalpagecount;
	
	private String worker;
	
	@Column(name = "operation_desc")
	private String operationdesc;
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
	@Column(name = "time_stamp")
	private LocalDateTime timestamp;

	public JobDispatchRepairDefectView(Long id) {
		this.id = id;
	}
	
	public JobDispatchRepairDefectView() {
		
	}
}
