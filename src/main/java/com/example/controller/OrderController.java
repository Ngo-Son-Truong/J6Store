package com.example.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class OrderController {
	@RequestMapping("/order/checkout")
	public String CheckOut() {
		return "order/checkout";
	}
	@RequestMapping("/order/list")
	public String List() {
		return "order/list";
	}
	@RequestMapping("/order/detail/{id}")
	public String Detail() {
		return "order/detail";
	}
}
