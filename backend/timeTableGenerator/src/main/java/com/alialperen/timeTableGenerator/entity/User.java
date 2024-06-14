package com.alialperen.timeTableGenerator.entity;


import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="Users")
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "ROLE", length = 7)
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private Long id;
    @Column(name="firstName")
    private String firstName;
    @Column(name="lastName")
    private String lastName;
    @Column(name = "ROLE", insertable = false, updatable = false)
    private String role;
    @Column(name="email",unique = true)
    private String email;
    @Column(name="login",unique = true)
    private String login;
    @Column(name="password")
    private String password;

    @Column(name="isAuthenticated",columnDefinition = "boolean default false")
    private boolean isAuthenticated;
	
	
}