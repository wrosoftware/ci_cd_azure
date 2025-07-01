package com.wrosoftware.emergencylaw.webapp.rest;


import com.wrosoftware.emergencylaw.webapp.domains.auth.AuthDomain;
import com.wrosoftware.emergencylaw.webapp.domains.auth.model.AuthRequest;
import com.wrosoftware.emergencylaw.webapp.domains.auth.model.RegistrationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
class AuthController {

    private final AuthDomain authDomain;


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegistrationRequest request) {
        return ResponseEntity.ok(authDomain.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authDomain.login(request));
    }


}
