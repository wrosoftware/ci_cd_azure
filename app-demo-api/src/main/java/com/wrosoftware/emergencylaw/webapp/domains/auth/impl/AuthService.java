package com.wrosoftware.emergencylaw.webapp.domains.auth.impl;

import com.wrosoftware.emergencylaw.webapp.domains.auth.model.AuthUser;
import com.wrosoftware.emergencylaw.webapp.domains.auth.model.RegistrationRequest;
import com.wrosoftware.emergencylaw.webapp.model.entity.User;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
class AuthService implements UserDetailsService {

    private final AuthUserRepository authRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AuthUser user = authRepository.findByEmail(username);
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                List.of() //roles
        );
    }

    @Transactional
    public AuthUser creatAuthUser(RegistrationRequest request, User user) {
        return authRepository.findById(user.getId())
                .map(authUser -> {
                    authUser.setPassword(passwordEncoder.encode(request.getPassword()));
                    return authUser;
                })
                .map(authRepository::save)
                .get();
    }
}
