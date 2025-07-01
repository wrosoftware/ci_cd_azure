package com.wrosoftware.emergencylaw.webapp.domains.user;

import com.wrosoftware.emergencylaw.webapp.domains.auth.model.RegistrationRequest;
import com.wrosoftware.emergencylaw.webapp.model.entity.User;

public interface UserDomain {
    User createUserWithAccount(RegistrationRequest request);
}
