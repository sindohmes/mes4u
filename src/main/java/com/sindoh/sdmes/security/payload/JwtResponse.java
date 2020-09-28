package com.sindoh.sdmes.security.payload;

import java.util.List;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private Long id;
	private String username;
	private String name;
	private String email;
	private Long site;
	private String lang;

	private List<String> roles;

	public JwtResponse(String accessToken, Long id, String username, String name, String email, Long site, String lang, List<String> roles) {
		this.token = accessToken;
		this.id = id;
		this.username = username;
		this.name = name;
		this.email = email;
		this.site = site;
		this.roles = roles;		
		this.lang = lang;
	}

	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public Long getSite() {
		return site;
	}
	
	public void setSite(Long site) {
		this.site = site;
	}

	public String getLang() {
		return lang;
	}
	
	public void setLang(String lang) {
		this.lang = lang;
	}
	
	public List<String> getRoles() {
		return roles;
	}
}