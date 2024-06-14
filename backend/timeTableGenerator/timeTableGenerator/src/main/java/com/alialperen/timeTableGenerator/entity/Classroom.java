package com.alialperen.timeTableGenerator.entity;

import java.util.ArrayList;
import java.util.Collection;

import com.alialperen.timeTableGenerator.entity.enums.TypeRoom;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "Classrooms")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class Classroom {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long id;

	@Column(name="numRoom")
	private int numRoom;
	@Column(name = "capacity")
	private int capacity;

	@Enumerated(EnumType.STRING)
	@Column(name="typeRoom")
	private TypeRoom typeRoom;

    @OneToMany(mappedBy = "classroom", fetch = FetchType.EAGER)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Collection<ModuleElement> moduleElements = new ArrayList<>();

}
