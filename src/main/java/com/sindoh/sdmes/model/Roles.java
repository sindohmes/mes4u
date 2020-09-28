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
@Table(name="roles")
public class Roles {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="role_id")
	private Long id;
	
	@Column(length = 100)
	private String name;
	
	@Column(length = 1000)
	private String description;
	
}
