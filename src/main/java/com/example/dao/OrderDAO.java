package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Order;

public interface OrderDAO extends JpaRepository<Order, Long>{

}
