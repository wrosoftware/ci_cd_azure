package com.wrosoftware.emergencylaw.webapp.domains.auth.impl;

import com.wrosoftware.emergencylaw.webapp.domains.auth.model.RegistrationRequest;
import jakarta.validation.Constraint;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = PasswordMatches.Validator.class)
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@interface PasswordMatches {

    String message() default "Password do not match";


    class Validator implements ConstraintValidator<PasswordMatches, RegistrationRequest> {

        @Override
        public boolean isValid(RegistrationRequest request, ConstraintValidatorContext context) {
            if (request.getPassword() == null || request.getConfirmPassword() == null) {
                return false;
            }
            return request.getPassword().equals(request.getConfirmPassword());
        }
    }
}
