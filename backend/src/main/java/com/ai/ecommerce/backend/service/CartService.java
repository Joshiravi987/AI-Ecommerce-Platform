package com.ai.ecommerce.backend.service;

import com.ai.ecommerce.backend.entity.Cart;
import com.ai.ecommerce.backend.repository.CartRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;

    public Cart addToCart(Cart cart) {

        return cartRepository.save(cart);
    }

    public List<Cart> getCartItems() {

        return cartRepository.findAll();
    }

    public String removeCartItem(Long id) {

        cartRepository.deleteById(id);

        return "Item Removed From Cart";
    }
}