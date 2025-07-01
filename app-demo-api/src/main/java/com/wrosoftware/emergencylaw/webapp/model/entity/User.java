package com.wrosoftware.emergencylaw.webapp.model.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "app_user")
@EqualsAndHashCode(callSuper = true)
public class User extends BaseEntity {

    private String name;
    private String surname;
    private String email;
    private String phone;

}
