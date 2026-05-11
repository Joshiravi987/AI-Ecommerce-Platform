package com.ai.ecommerce.backend.controller;


import com.ai.ecommerce.backend.dto.LoginRequest;
import com.ai.ecommerce.backend.dto.RegisterRequest;
import com.ai.ecommerce.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request){
        return userService.register(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request){

        return  userService.login(request);
    }
}
