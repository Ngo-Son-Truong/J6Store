package com.example.service;

import java.util.List;

import com.example.entity.Account;

public interface AccountService {
	public Account findbyId(String username);
	public List<Account> getAdministrators();
	public List<Account> findAll();
}
