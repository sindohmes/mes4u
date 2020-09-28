package com.sindoh.sdmes.model;
import java.time.LocalDateTime;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
@Table(name="mtl_item_label_rules")
public class MtlItemLabelRules {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "label_id")
	private Long id;
	
	@Column(name = "item_id")
	private Long itemid;

	@NotNull
	@Column(name = "label_name")
	private String labelname;
	
	@Column(name = "label_desc")
	private String labeldesc;
	
	@NotNull
	@Column(name = "use_attribute_name")
	private String useattributename;
	
	@Column(name = "use_attribute_value")
	private String useattributevalue;
	
	@Column(name = "mfg_site_id")
	private Long site;
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
	@Column(name = "creation_date")
	private LocalDateTime creationdate;
	
	@Column(name = "created_by")
	private Long createdby;
	
	@Column(name = "last_updated_by")
	private Long lastupdatedby;
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
	@Column(name = "last_update_date")
	private LocalDateTime lastupdatedate;

	public MtlItemLabelRules(Long id) {
		this.id = id;
	}
	
	public void setMtlitemLabelRuleName(Map<String, Object> params) {
		String type = params.get("type").toString();
		String name = params.get("name").toString();
		String itemid = params.get("itemid").toString();
		String userid = params.get("userid").toString();

		try {
			this.itemid = Long.parseLong(itemid);			
		} catch(Exception ex) {
			this.itemid = null;
		}
		
		this.labelname = type;
		this.labeldesc = type;
		this.useattributename = "FILE_NAME";
		this.useattributevalue = name;
		this.creationdate = LocalDateTime.now();
		this.lastupdatedate = LocalDateTime.now();
		
		try {
			this.createdby = Long.parseLong(userid);
		} catch (Exception ex) {
			this.createdby = null;
		}
		
		try {
			this.lastupdatedby = Long.parseLong(userid);
		} catch (Exception ex) {
			this.lastupdatedby = null;
		}
		
	}
	public MtlItemLabelRules() {
		
	}
}
