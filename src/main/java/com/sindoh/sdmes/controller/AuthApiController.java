package com.sindoh.sdmes.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sindoh.sdmes.model.Roles;
import com.sindoh.sdmes.security.payload.LoginRequest;
import com.sindoh.sdmes.security.payload.RegisterRequest;
import com.sindoh.sdmes.service.AuthService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthApiController {
	@Autowired
	AuthService authService;
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) throws Exception {
		return authService.authenticateUser(loginRequest);
	}

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
		return authService.registerUser(registerRequest);
	}
	
	@PostMapping("/update")
	public ResponseEntity<?> updateUser(@Valid @RequestBody RegisterRequest registerRequest) {
		return authService.updateUser(registerRequest);
	}
	
	@GetMapping("/users")
	public Map<String, Object> getUsersView(HttpServletRequest request, @RequestParam Map<String, Object> params, HttpServletResponse reponse) {
		return authService.getUsersView(params);
	}

	@GetMapping(value = "/roles")
	public List<Roles> getRoles(HttpServletRequest request, HttpServletResponse reponse) throws Exception {
		return authService.getRoles();		
	}
}
