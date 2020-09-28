package com.sindoh.sdmes.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sindoh.sdmes.model.Users;
import com.sindoh.sdmes.repository.UserRepository;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserRepository userRepository;

	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users user = userRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with user id: " + username));

		return UserDetailsImpl.build(user);
	}

}
