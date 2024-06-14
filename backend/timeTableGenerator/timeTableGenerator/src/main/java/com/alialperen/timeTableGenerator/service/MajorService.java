package com.alialperen.timeTableGenerator.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.alialperen.timeTableGenerator.entity.Major;
import com.alialperen.timeTableGenerator.entity.Semester;

public interface MajorService {
	
	Major createMajor(Major major);
	
	List<Major> getAllMajors();
	
	String deleteMajor(long id);
	
	Major getMajorById(long id);
	
	Major updateMajor(long id,Major major);
	
	Page<Major> getMajors(Pageable pageable);
	
	Page<Major> searchMajors(String keyword, Pageable pageable);
	
	List<Semester> getSemesterByMajor(long majorId);

}
