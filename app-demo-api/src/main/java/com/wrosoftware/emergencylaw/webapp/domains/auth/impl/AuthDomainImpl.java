package com.wrosoftware.emergencylaw.webapp.domains.auth.impl;

import com.wrosoftware.emergencylaw.webapp.domains.auth.AuthDomain;
import com.wrosoftware.emergencylaw.webapp.domains.auth.model.AuthRequest;
import com.wrosoftware.emergencylaw.webapp.domains.auth.model.AuthUser;
import com.wrosoftware.emergencylaw.webapp.domains.auth.model.RegistrationRequest;
import com.wrosoftware.emergencylaw.webapp.domains.user.UserDomain;
import com.wrosoftware.emergencylaw.webapp.model.entity.User;
import com.wrosoftware.emergencylaw.webapp.model.exception.AppException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import java.util.Optional;

import static java.util.Optional.ofNullable;

@Component
@RequiredArgsConstructor
class AuthDomainImpl implements AuthDomain {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenService jwtTokenService;
    private final UserDomain userDomain;
    private final AuthService authService;


    @Override
    public String register(@Valid RegistrationRequest request) {
        return ofNullable(request)
                .map(userDomain::createUserWithAccount)
                .map(user -> authService.creatAuthUser(request, user))
                .map(authUser -> AuthRequest.builder()
                                            .login(request.getEmail())
                                            .password(request.getPassword())
                                            .build())
                .map(this::login)
                .get();
    }

    @Override
    public String login(AuthRequest request) {
        try {
            UsernamePasswordAuthenticationToken loginAndPassAuth = new UsernamePasswordAuthenticationToken(request.getLogin(), request.getPassword());
            Authentication authentication = authenticationManager.authenticate(loginAndPassAuth);
            if(authentication.isAuthenticated()) {
                return jwtTokenService.generateToken(request.getLogin());
            } else {
                throw new AppException("AUTH_001", "Incorrect login or password");
            }
        } catch (AuthenticationException e) {
            throw new AppException("AUTH_001", "Incorrect login or password");
        }
    }

}
