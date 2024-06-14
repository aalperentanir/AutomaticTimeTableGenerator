package com.alialperen.timeTableGenerator.service.imp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.alialperen.timeTableGenerator.entity.Major;
import com.alialperen.timeTableGenerator.entity.Semester;
import com.alialperen.timeTableGenerator.repository.MajorRepository;
import com.alialperen.timeTableGenerator.service.MajorService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MajorServiceImp implements MajorService{
	
	private final MajorRepository majorRepository;
	
	
	@Override
	public Major createMajor(Major major) {
		// TODO Auto-generated method stub
		return majorRepository.save(major);
	}

	@Override
	public List<Major> getAllMajors() {
		// TODO Auto-generated method stub
		return majorRepository.findAll();
	}

	@Override
	public String deleteMajor(long id) {
		 try {
			 getMajorById(id);
			 majorRepository.deleteById(id);
	            return "Major deleted successfully";
	        } catch (Exception e) {
	            return e.getMessage();
	        }
	}

	@Override
	public Major getMajorById(long id) {
		// TODO Auto-generated method stub
		 return majorRepository.findById(id).orElseThrow(() -> new RuntimeException("Major is not exist"));
    }

	@Override
	public Major updateMajor(long id, Major major) {
		major.setId(id);
		
		return majorRepository.save(major);
	}

	@Override
	public Page<Major> getMajors(Pageable pageable) {
		// TODO Auto-generated method stub
		return majorRepository.findAll(pageable);
	}

	@Override
	public Page<Major> searchMajors(String keyword, Pageable pageable) {
		// TODO Auto-generated method stub
		return majorRepository.searchMajors(keyword, pageable);
	}

	@Override
	public List<Semester> getSemesterByMajor(long majorId) {
		Major major = getMajorById(majorId);
		List<Semester> semesters = new ArrayList<>();
		major.getLessons().forEach(lesson -> {
			semesters.add(lesson.getSemester());
		});
		
		return semesters;
	}
	
	

}
