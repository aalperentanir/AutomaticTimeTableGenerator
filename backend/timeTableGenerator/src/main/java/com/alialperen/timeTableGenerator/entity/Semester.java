package com.alialperen.timeTableGenerator.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import com.alialperen.timeTableGenerator.entity.enums.SemesterNumber;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "Semester")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Semester {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private Long id;
    
    @Temporal(TemporalType.DATE)
    @Column(name="startDate")
    private Date startDate;
    
    @Temporal(TemporalType.DATE)
    @Column(name="endDate")
    private Date endDate;
    
    @Enumerated(EnumType.STRING)
    @Column(name="semesterNumber")
    private SemesterNumber number;
    
    @Column(name="academicYear")
    private String academicYear; // örnek: "2022-2023"
    
    @OneToMany(mappedBy = "semester")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Collection<Classes> lessons = new ArrayList<>();
}

