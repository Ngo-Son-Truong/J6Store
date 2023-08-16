package com.example.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.AccountDAO;
import com.example.entity.Account;
import com.example.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService{
	@Autowired
	AccountDAO adao;

	@Override
	public Account findbyId(String username) {
		return adao.findById(username).get();
	}
	
}
