package com.wrosoftware.emergencylaw.webapp.domains.auth;

import com.wrosoftware.emergencylaw.webapp.domains.auth.model.AuthRequest;
import com.wrosoftware.emergencylaw.webapp.domains.auth.model.RegistrationRequest;

public interface AuthDomain {

    String register(RegistrationRequest request);
    String login(AuthRequest request);

}
