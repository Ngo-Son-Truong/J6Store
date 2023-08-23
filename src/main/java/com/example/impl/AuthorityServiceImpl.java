package com.example.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.AccountDAO;
import com.example.dao.AuthorityDAO;
import com.example.entity.Account;
import com.example.entity.Authority;
import com.example.service.AuthorityService;

@Service
public class AuthorityServiceImpl implements AuthorityService{
	@Autowired
	AuthorityDAO dao;
	@Autowired
	AccountDAO acdao;
	
	
	public List<Authority> findAll(){
		return dao.findAll();
	}	
	
	@Override
	public Authority create(Authority auth) {
		return dao.save(auth);
	}

	
	public void delete(Integer id) {
		dao.deleteById(id);
	}
	
	@Override
	public List<Authority> findAuthoritiesOfAdministrators() {
		List<Account> accounts = acdao.getAdministrators();
			return dao.authoritiesOf(accounts);
		}
}
