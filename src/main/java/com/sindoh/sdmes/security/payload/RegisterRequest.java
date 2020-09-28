package com.sindoh.sdmes.security.payload;

import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class RegisterRequest {
	private Long id;
	
    @NotBlank
    @Size(min = 4, max = 30)
    private String username;
 
    @NotBlank
    @Email
    private String email;
    
    private Set<String> role;
    
    @Size(min = 6, max = 300)
    private String password;
    
    private String firstname;
    private String lastname;
    private String organization;
  
}