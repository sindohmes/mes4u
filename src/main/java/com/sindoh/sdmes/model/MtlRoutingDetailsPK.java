package com.sindoh.sdmes.model;

import java.io.Serializable;

import javax.persistence.Table;

import lombok.Data;

@Data
@Table(name="mtl_routing_details")
@SuppressWarnings("serial")
public class MtlRoutingDetailsPK implements Serializable {
	private Integer routingid;
	private Integer operationid;

}
