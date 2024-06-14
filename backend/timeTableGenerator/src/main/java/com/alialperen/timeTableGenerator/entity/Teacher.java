package com.alialperen.timeTableGenerator.entity;

import java.time.DayOfWeek;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@DiscriminatorValue("TEACHER")
@NoArgsConstructor
@AllArgsConstructor
public class Teacher extends User {
	
	@ToString.Exclude
    @OneToMany(mappedBy = "teacher", fetch = FetchType.EAGER)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Collection<NotAvailable> notAvailables = new ArrayList<>();
	
	@ToString.Exclude
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "teacher")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Collection<ModuleElement> moduleElements = new ArrayList<>();
}
