package com.sindoh.sdmes.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="mtl_item_masters")
public class MtlItemProductFamily {
	@Id
	@Column(name="product_family")
	private String family;
	
	public MtlItemProductFamily(String family) {
		this.family = family;
	}

	public MtlItemProductFamily() {
		
	}
	
}
