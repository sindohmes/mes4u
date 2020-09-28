package com.sindoh.sdmes.security.payload;

import java.util.Map;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class LoginResponse {
	@NotBlank
	private Long id;
	
	@NotBlank
	private String username;
	
	private String language;
	private Long mfgsite;
	private String teamcode;
	private String dfltform;
	private String setid;
	private String setpw;
	
	@NotBlank
	private Long result;

	public LoginResponse(Map<String, Object> params) {
		this.id = Long.valueOf(params.get("mes_user_id").toString());
		this.username = (@NotBlank String) params.get("user_name");
		this.language = (String) params.get("language");
		this.mfgsite = Long.valueOf(params.get("user_mfgsite").toString());
		this.dfltform = (String) params.get("dfltform_name");
		this.setid = (String) params.get("set_user_id");
		this.setpw = (String) params.get("set_password");
		this.result =Long.valueOf(params.get("result").toString());
	}
}