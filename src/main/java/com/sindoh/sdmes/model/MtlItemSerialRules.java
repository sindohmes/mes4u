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
@Table(name="mtl_item_serial_rules")
public class MtlItemSerialRules {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "serial_rule_id")
	private Long id;
	
	@Column(name = "serial_rule_description")
	private String serialRuleDescription;
	
	@Column(name = "prefix_year_month")
	private LocalDateTime prefixYearMonth;
	
	@Column(name = "prefix_year_month_type")
	private String prefixYearMonthType;
	
	@Column(name = "start_number")
	private Long startNumber;
	
	@Column(name = "end_number")
	private Long endNumber;
	
	private Long digits;
	
	private String suffix;
	
	@Column(name = "daily_initialized")
	private String dailyInitialized;
	
	@Column(name = "check_sum")
	private String checkSum;
	
	@Column(name = "fixed_prefix")
	private String fixedPrefix;
	
	@Column(name = "user_defined_prod_date")
	private LocalDateTime userDefinedProdDate;
	
	@Column(name = "last_update_date")
	private LocalDateTime lastUpdateDate = LocalDateTime.now();
	
	@Column(name = "last_updated_by")
	private Long lastUpdatedBy;
	
	@Column(name = "creation_date")
	private LocalDateTime creationDate = LocalDateTime.now();
	
	@Column(name = "created_by")
	private Long createdBy;
	
	@Column(name = "shared_flag")
	private String sharedFlag;
	
	@Column(name = "country_code")
	private String countryCode;
	
	private Long encoding;
	
	@Column(name = "serial_pg_type")
	private String serialPgType;
	
	@Column(name = "monthly_initialized")
	private String monthlyInitialized;
	
	@Column(name = "serial_rule_type")
	private String serialRuleType;
	
	
	public MtlItemSerialRules(Long id) {
		this.id = id;
	}
	
	public MtlItemSerialRules() {
		
	}
}
