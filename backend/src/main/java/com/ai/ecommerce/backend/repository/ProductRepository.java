package com.ai.ecommerce.backend.repository;

import com.ai.ecommerce.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
