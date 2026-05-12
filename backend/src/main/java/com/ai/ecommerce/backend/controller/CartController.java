package com.ai.ecommerce.backend.controller;

import com.ai.ecommerce.backend.entity.Cart;
import com.ai.ecommerce.backend.service.CartService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")

@RequiredArgsConstructor

public class CartController {

    private final CartService cartService;

    @PostMapping
    public Cart addToCart(
            @RequestBody Cart cart
    ) {

        return cartService.addToCart(cart);
    }

    @GetMapping
    public List<Cart> getCartItems() {

        return cartService.getCartItems();
    }

    @DeleteMapping("/{id}")
    public String removeCartItem(
            @PathVariable Long id
    ) {

        return cartService.removeCartItem(id);
    }
}