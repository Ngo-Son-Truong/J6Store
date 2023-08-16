package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SecurityController {
	@RequestMapping("/security/login/form")
	public String loginForm(Model model) {
		model.addAttribute("message","Vui Long Dang Nhap!");
		return "security/login";
	}
	
	@RequestMapping("/security/login/success")
	public String LoginSuccess(Model model) {
		model.addAttribute("message","Dang Nhap thanh cong");
		return "security/login";
	}
	
	@RequestMapping("/security/login/error")
	public String LoginError(Model model) {
		model.addAttribute("message","Sai Thong Tin Dang Nhap");
		return "security/login";
	}
	
	@RequestMapping("/security/unauthoried")
	public String unauthoried(Model model) {
		model.addAttribute("message","Khong Co Quyen Truy Xuat!");
		return "security/login";
	}
	
	@RequestMapping("/security/logoff/success")
	public String LoginOffSuccess(Model model) {
		model.addAttribute("message","Ban Da Dang Xuat!");
		return "security/login";
	}
//	@CrossOrigin("*")
}
