package com.backend.org.service;

import com.backend.org.payload.LoginRequest;
import com.backend.org.payload.SignUpRequest;
import org.springframework.http.ResponseEntity;

public interface AuthService {

    ResponseEntity<?> authenticateUser(LoginRequest loginRequest);
    ResponseEntity<?> registerUser( SignUpRequest signUpRequest);

}
