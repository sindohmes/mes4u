package com.sindoh.sdmes.security.service;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sindoh.sdmes.model.Users;

public class UserDetailsImpl implements UserDetails {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String username;
	private String firstname;
	private String lastname;
	private String email;
	private String organization;
	private Long site;
	private String lang;

	@JsonIgnore
	private String password;

	private Collection<? extends GrantedAuthority> authorities;

	public UserDetailsImpl(Users user, Collection<? extends GrantedAuthority> authorities) {
		this.id = user.getId();
		this.username = user.getUsername();
		this.password = user.getPassword();
		this.firstname = user.getFirstname();
		this.lastname = user.getLastname();
		this.email = user.getEmail();
		this.organization = user.getOrganization();
		this.authorities = authorities;
		this.site = user.getSite();
		this.lang = user.getLang();
	}

	public static UserDetailsImpl build(Users user) {
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName()))
				.collect(Collectors.toList());
		
		return new UserDetailsImpl(user,authorities);
	}

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}
	
	public Long getId() {
		return id;
	}

	public String getPassword() {
		return password;
	}

	public String getUsername() {
		return username;
	}
	
	public String getName() {
		return firstname + ' ' + lastname;
	}
	
	public String getEmail() {
		return email;
	}
	
	public Long getSite() {
		return site;
	}
	
	public String getLang() {
		return lang;
	}
	
	public String getOrganization() {
		return organization;
	}	

	public boolean isAccountNonExpired() {
		return true;
	}

	public boolean isAccountNonLocked() {
		return true;
	}

	public boolean isCredentialsNonExpired() {
		return true;
	}

	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl user = (UserDetailsImpl) o;
		return Objects.equals(id, user.id);
	}

}
