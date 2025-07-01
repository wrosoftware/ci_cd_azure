package com.wrosoftware.emergencylaw.webapp.domains.auth.impl;

import com.wrosoftware.emergencylaw.webapp.domains.auth.model.AuthUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

interface AuthUserRepository extends JpaRepository<AuthUser, UUID> {

    AuthUser findByEmail(String username);

}
