package com.example.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.entity.Role;

@Service
public interface RoleService {

	public List<Role> findAll();

}
