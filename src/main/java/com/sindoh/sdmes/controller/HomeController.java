package com.sindoh.sdmes.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping(value = "/")
public class HomeController implements ErrorController {
	@GetMapping("/")
	public String index() {
		return "index.html";
	}

	@GetMapping("/error")
	public String redirect() {
		return "index.html";
	}
	
	public String getErrorPath() {
		return "/error";
	}
	


}
