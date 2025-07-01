package com.wrosoftware.emergencylaw.webapp.domains.auth.impl;

import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Date;

import static io.jsonwebtoken.SignatureAlgorithm.HS256;
import static java.nio.charset.StandardCharsets.UTF_8;

@Service
class JwtTokenService {

    @Value("${auth.token-secret}")
    private String secretKey;

    public String generateToken(String username) {
        long expirationTimeMs = 1000 * 60 * 60; // 1 godzina
        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expirationTimeMs))
                .signWith(getSigningKey())
                .compact();
    }

    private Key getSigningKey() {
        byte[] keyBytes = secretKey.getBytes(UTF_8);
        return new SecretKeySpec(keyBytes, HS256.getJcaName());
    }
}
