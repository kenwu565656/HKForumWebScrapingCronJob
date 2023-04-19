package com.example.cronJob.repository.inter;

import com.example.cronJob.model.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface PostRepository extends CrudRepository<Post, Integer> {

}
