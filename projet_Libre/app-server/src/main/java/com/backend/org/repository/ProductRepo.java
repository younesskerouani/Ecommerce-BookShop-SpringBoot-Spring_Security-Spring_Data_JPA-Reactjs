package com.backend.org.repository;


import com.backend.org.model.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<ProductEntity, Integer > {
}
