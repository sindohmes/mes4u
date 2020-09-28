package com.sindoh.sdmes.model;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
@Table(name="mtl_defect_codes")
public class MtlDefectCodes {
	private final String DATETIME_PATTERN = "yyyy-MM-dd HH:mm:ss";
	public MtlDefectCodes() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "defect_code_id")
	private int id;
	
	@Column(name = "defect_code")
	private String code;
	
	@Column(name = "code_level")
	private int codeLevel;
	
	@Column(name = "defect_name")
	private String name;
	
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
	@Column(name = "disable_date")
	private Date disableDate;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DATETIME_PATTERN, timezone = "Asia/Seoul")
	@DateTimeFormat(pattern = DATETIME_PATTERN)
	@Column(name = "creation_date")
	private LocalDateTime creationDate;
	
	@Column(name = "created_by")
	private Long createdBy;
	
	@Column(name = "last_updated_by")
	private Long lastUpdatedBy;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DATETIME_PATTERN, timezone = "Asia/Seoul")
	@DateTimeFormat(pattern = DATETIME_PATTERN)
	@Column(name = "last_update_date")
	private LocalDateTime lastUpdateDate;
	
	@Column(name = "assembly_family_id")
	private Long assemblyFamilyId;
	
	@Column(name = "assembly_family_code")
	private String assemblyFamilyCode;
	
	@Column(name = "reason_for_fault")
	private String reasonForFault;
	
	@Column(name = "alarm_count")
	private Long alarmCount;
	
	@Column(name = "parent_code_lv1")
	private String parentCodeLv1;
	
	@Column(name = "parent_code_lv2")
	private String parentCodeLv2;
	
	@Column(name = "parent_code_lv3")
	private String parentCodeLv3;
	
	@Column(name = "parent_code_lv4")
	private String parentCodeLv4;
}
