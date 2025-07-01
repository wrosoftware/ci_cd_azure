package com.wrosoftware.emergencylaw.webapp.domains.auth.model;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class RegistrationRequest {
    private boolean individual;

    private String firstname;
    private String surname;
    private String email;
    private String password;
    private String confirmPassword;

    private String companyName;
    private String nip;

    private String street;
    private String homeNumber;
    private String city;
    private String zipCode;

}
