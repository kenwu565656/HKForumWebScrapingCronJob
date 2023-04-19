package com.example.cronJob.repository;

import com.example.cronJob.model.Lihkgpost;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface lihkgpostRepository extends CrudRepository<Lihkgpost, Integer> {

}
