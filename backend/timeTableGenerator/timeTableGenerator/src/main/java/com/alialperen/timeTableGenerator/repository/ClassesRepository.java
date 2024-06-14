package com.alialperen.timeTableGenerator.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.alialperen.timeTableGenerator.entity.Classes;

public interface ClassesRepository extends JpaRepository<Classes, Long> {
	
	
	   @Query("select e from Classes e where e.major.department.id = ?1")
	    List<Classes> getLessonsByDepartement(Long departementId);

	    @Query("select e from Classes e where e.id = ?1")
	    Classes getLessonByID(Long Id);
	    @Query("select e from Classes e where e.semester.id=?2 and (e.label LIKE %?1%  or e.major.label LIKE %?1% )")
	    Page<Classes> searchLessons(String keyword,Long sem, Pageable pageable);
	    
	    @Query("select e from Classes e where e.label LIKE %?1%  or e.major.label LIKE %?1% ")
	    Page<Classes> searchLessons(String keyword, Pageable pageable);
}
