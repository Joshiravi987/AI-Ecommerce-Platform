package com.ai.ecommerce.backend.repository;

import com.ai.ecommerce.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    User findByEmail(String email);

}
