package com.wrosoftware.emergencylaw.webapp.domains.auth.model;

import com.wrosoftware.emergencylaw.webapp.model.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table(name = "app_user")
@Data
@EqualsAndHashCode(callSuper = true)
public class AuthUser extends BaseEntity {

    private String email;
    private String password;

}
