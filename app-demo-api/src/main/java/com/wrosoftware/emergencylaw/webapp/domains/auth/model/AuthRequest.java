package com.wrosoftware.emergencylaw.webapp.domains.auth.model;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class AuthRequest {

    private String login;
    private String password;

}
