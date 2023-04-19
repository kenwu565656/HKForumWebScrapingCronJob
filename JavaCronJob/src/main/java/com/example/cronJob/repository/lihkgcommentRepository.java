package com.example.cronJob.repository;


import com.example.cronJob.model.Lihkgcomment;
import com.example.cronJob.model.Lihkgpost;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

public interface lihkgcommentRepository extends CrudRepository<Lihkgcomment, Integer> {
}
