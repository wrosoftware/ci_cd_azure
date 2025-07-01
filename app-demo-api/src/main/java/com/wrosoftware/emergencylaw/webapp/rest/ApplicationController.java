package com.wrosoftware.emergencylaw.webapp.rest;

import com.wrosoftware.emergencylaw.webapp.model.dto.application.ApplicationInfoDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/application")
@RequiredArgsConstructor
class ApplicationController {

    @Value("${application.name}")
    private String applicationName;
    @Value("${application.version}")
    private String applicationVersion;


    @GetMapping("/info")
    public ApplicationInfoDto getApplicationInfo() {
        return ApplicationInfoDto.builder()
                .name(applicationName)
                .version(applicationVersion)
                .description("Hello world")
                .build();
    }

}
