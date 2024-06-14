package com.alialperen.timeTableGenerator.entity;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="Departments")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Department {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
	private long id;
    
    @Column(name="label")
    private String label;
    
    @Column(name="chefDepartment")
    private String chefDepartment;
    
    @OneToMany(mappedBy = "department", fetch = FetchType.EAGER)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Collection<Major> majors = new ArrayList<>();

    
    
    
    
    

}
