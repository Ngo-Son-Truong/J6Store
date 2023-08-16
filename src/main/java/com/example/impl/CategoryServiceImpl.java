package com.example.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.CategoryDAO;
import com.example.entity.Category;
import com.example.service.CategoryService;
@Service
public class CategoryServiceImpl implements CategoryService{
	@Autowired
	CategoryDAO cdao;

	@Override
	public List<Category> findAll() {		
		return cdao.findAll();
	}
	
}
