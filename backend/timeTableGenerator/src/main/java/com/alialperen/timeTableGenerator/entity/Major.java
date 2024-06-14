package com.alialperen.timeTableGenerator.entity;

import java.util.ArrayList;
import java.util.Collection;


import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name="Majors")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Major {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
	private long id;
	
    @Column(name="label")
	private String label;
	
	@Column(name="numOfSem")
	private int numOfSem;
    
	@Column(name="chefMajor")
	private String chefMajor;
	
    @OneToMany(mappedBy = "major")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private Collection<Classes> lessons = new ArrayList<>();
    
    @ManyToOne
    @JoinColumn(name="department")
    private Department department;
	

}
