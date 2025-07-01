package com.wrosoftware.emergencylaw.webapp.model.exception;

import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor
public class AppException extends RuntimeException {

    String code;
    String description;


}
