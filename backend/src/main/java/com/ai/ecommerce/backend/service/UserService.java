package com.ai.ecommerce.backend.service;

import com.ai.ecommerce.backend.dto.LoginRequest;
import com.ai.ecommerce.backend.dto.RegisterRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.ai.ecommerce.backend.entity.User;
import com.ai.ecommerce.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final PasswordEncoder passwordEncoder;


    private final UserRepository userRepository;

    public String register(RegisterRequest request){
        User user = User.builder()
        .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();


                userRepository.save(user);

                return "User Register Successfully.";
    }
    private final JwtService jwtService;

    public String login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail());

        if (user == null) {
            return "User Not Found";
        }
        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        )) {

            return "Invalid Password";
        }
    return jwtService.generateToken(user.getEmail());
}}
