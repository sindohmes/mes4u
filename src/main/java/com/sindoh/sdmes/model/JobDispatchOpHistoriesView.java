package com.sindoh.sdmes.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="job_dispatch_op_histories_v")
public class JobDispatchOpHistoriesView {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="history_id")
	private Long id;
	
	@Column(name="operator_id")
	private Integer operatorid;
	
	@Column(name="operation_type")
	private String optype;
	
	@Column(name="dispatch_operation_id")
	private Integer dispatchOperationId;
	
	@Column(name="dispatch_id")
	private Integer dispatchId;
	
	@Column(name="user_name")
	private String userName;
	
	@Column(name="line_id")
	private String lineId;

	@Column(name="line_name")
	private String lineName;
	
	@Column(name="interfaced_wo_num")
	private String interfacedWoNum;
	
	@Column(name="config_indicator")
	private String configIndicator;
	
	@Column(name="item_number")
	private String itemNumber;
	
	@Column(name="item_description")
	private String itemDescription;
	
	@Column(name="serial_number")
	private String serialNumber;
	
	@Column(name="recent_flag")
	private String recentFlag;
	
	private String comments;
	
	@Column(name="operation_desc")
	private String operationDesc;
	
	@Column(name="part_item_number")
	private String partItemNumber;
	
	@Column(name="part_description")
	private String partDescription;
	
	@Column(name="part_serial_number")
	private String partSerialNumber;
	
	@Column(name="result_value")
	private String resultValue;
	
	@Column(name="time_stamp")
	private java.sql.Timestamp timeStamp;
	
	@Column(name="timestamp_str")
	private String timestampStr;
	
	@Column(name="date_flag")
	private String dateFlag;
	
	private String passfail;
	
	@Column(name="product_family")
	private String productFamily;
	
	
	public JobDispatchOpHistoriesView(Long id) {
		this.id = id;
	}

	public JobDispatchOpHistoriesView() {
		
	}
	
}
