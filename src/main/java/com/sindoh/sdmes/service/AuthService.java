package com.sindoh.sdmes.service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sindoh.sdmes.model.Roles;
import com.sindoh.sdmes.model.Users;
import com.sindoh.sdmes.repository.RoleRepository;
import com.sindoh.sdmes.repository.UserRepository;
import com.sindoh.sdmes.repository.UserViewRepository;
import com.sindoh.sdmes.security.jwt.JwtUtils;
import com.sindoh.sdmes.security.payload.JwtResponse;
import com.sindoh.sdmes.security.payload.LoginRequest;
import com.sindoh.sdmes.security.payload.RegisterRequest;
import com.sindoh.sdmes.security.service.UserDetailsImpl;
import com.sindoh.sdmes.specification.UserViewSpecs;

@Service
public class AuthService {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	@Autowired
	UserViewRepository userViewRepository;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	JwtUtils jwtUtils;
	
	// Currently Web Site List is default site, lang, will add site management.
	private final Long default_site_id = 1L;
	private final String default_lang = "EN";
	
	public ResponseEntity<?> authenticateUser(LoginRequest loginRequest) {
		try {
			// Login Process
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);
			
			UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
			List<String> roles = userDetails.getAuthorities().stream()
					.map(item -> item.getAuthority())
					.collect(Collectors.toList());

			return ResponseEntity.ok(new JwtResponse(jwt, 
					 userDetails.getId(), 
					 userDetails.getUsername(),
					 userDetails.getName(),
					 userDetails.getEmail(),
					 userDetails.getSite(),
					 userDetails.getLang(),
					 roles));
			
		} catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}

	public ResponseEntity<?> registerUser(RegisterRequest registerRequest) {
		if (userRepository.existsByUsername(registerRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body("Error: Username is already taken!");
		}

		// Create new user's account
		Users user = new Users(registerRequest.getUsername(), 
							 encoder.encode(registerRequest.getPassword()));

		Set<String> strRoles = registerRequest.getRole();
		Set<Roles> roles = new HashSet<>();
		
		if (strRoles == null) {
			Roles userRole = roleRepository.findByName("ROLE_BASIC")
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			// Role ID 1: ROLE_BASIC
			// Role ID 2: ROLE_ADMIN
			// If you want to add other roles, you can insert 'ROLES' table the data and add roles in this method.
			
			strRoles.forEach(role -> {
				switch (role) {
				case "2":
					Roles adminRole = roleRepository.findByName("ROLE_ADMIN")
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				default:
					Roles userRole = roleRepository.findByName("ROLE_BASIC")
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		user.setFirstname(registerRequest.getFirstname());
		user.setLastname(registerRequest.getLastname());
		user.setEmail(registerRequest.getEmail());
		user.setOrganization(registerRequest.getOrganization());
		user.setCreationDate(LocalDateTime.now());
		user.setLastUpdateDate(LocalDateTime.now());
		user.setRegisteredDate(LocalDateTime.now());
		user.setSite(default_site_id);
		user.setLang(default_lang);
		
		try {
			userRepository.save(user);
			return ResponseEntity.ok("User registered successfully!");	
			
		} catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}

	public ResponseEntity<?> updateUser(RegisterRequest registerRequest) {
		Users user = userRepository.findById(registerRequest.getId()).get();
		
		// Modification Added
		if (registerRequest.getPassword() != null) {
			user.setPassword(encoder.encode(registerRequest.getPassword()));
		}
		
		user.setEmail(registerRequest.getEmail());
		user.setOrganization(registerRequest.getOrganization());
		user.setLastUpdateDate(LocalDateTime.now());		
		
		try {
			userRepository.save(user);
			return ResponseEntity.ok("User modification successfully!");	
			
		} catch(Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	public Map<String, Object> getUsersView(Map<String,Object> params) {
		Map<String, Object> map = new HashMap<String, Object>();

		int page = Integer.parseInt((String)params.get("page")) - 1;
		int size = Integer.parseInt((String)params.get("limit"));
		Sort sort = Sort.by((String)params.get("sortprop"));		
			
		if (params.get("sort") != null) {
			if (params.get("sort").equals("descending")) {
				sort = sort.descending();
			} else {
				sort = sort.ascending();
			}
		}
			
		Pageable pageable = PageRequest.of(page, size, sort);
		
		map.put("items", userViewRepository.findAll(UserViewSpecs.searchWith(params), pageable));
		map.put("total", userViewRepository.count());

		return map;		
	}

	public List<Roles> getRoles() {
		return roleRepository.findAll();
	}
	
}
