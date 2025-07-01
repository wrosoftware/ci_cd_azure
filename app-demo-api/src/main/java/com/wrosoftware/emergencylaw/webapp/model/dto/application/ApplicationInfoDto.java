package com.wrosoftware.emergencylaw.webapp.model.dto.application;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class ApplicationInfoDto {

    String name;
    String version;
    String description;

}
