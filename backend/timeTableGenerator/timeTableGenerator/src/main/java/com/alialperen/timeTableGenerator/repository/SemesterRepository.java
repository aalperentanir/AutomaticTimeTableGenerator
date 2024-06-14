package com.alialperen.timeTableGenerator.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alialperen.timeTableGenerator.entity.*;
import com.alialperen.timeTableGenerator.entity.enums.SemesterNumber;

public interface SemesterRepository extends JpaRepository<Semester, Long> {
	
	List<Semester> findByNumber(SemesterNumber number);

}
