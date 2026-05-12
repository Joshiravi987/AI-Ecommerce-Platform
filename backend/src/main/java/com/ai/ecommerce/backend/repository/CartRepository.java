package com.ai.ecommerce.backend.repository;

import com.ai.ecommerce.backend.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart,Long> {
}
