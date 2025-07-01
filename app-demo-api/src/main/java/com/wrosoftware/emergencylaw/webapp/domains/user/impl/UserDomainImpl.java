package com.wrosoftware.emergencylaw.webapp.domains.user.impl;

import com.wrosoftware.emergencylaw.webapp.domains.auth.model.RegistrationRequest;
import com.wrosoftware.emergencylaw.webapp.domains.user.UserDomain;
import com.wrosoftware.emergencylaw.webapp.model.entity.User;
import org.springframework.stereotype.Component;

@Component
class UserDomainImpl implements UserDomain {
    @Override
    public User createUserWithAccount(RegistrationRequest request) {
        User user = new User();
        //TODO
        return user;
    }
}
