package com.sindoh.sdmes.model;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
@Table(name="mtl_item_packing_rules")
public class MtlItemPackingRules {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "packing_id")
	private Long id;
	
	@Column(name = "item_id")
	private Long itemid;

	@Column(name = "packing_type")
	private String packingtype;
	
	@Column(name = "packing_qty")
	private Long packingqty;
	
	@Column(name = "subpacking_type")
	private String subpackingtype;
	
	@Column(name = "lpn_instanced")
	private String lpninstanced;
	
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

	public MtlItemPackingRules(Long id) {
		this.id = id;
	}
	
	public MtlItemPackingRules() {
		
	}
}
