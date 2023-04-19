package com.example.cronJob.controller;

import com.example.cronJob.model.Post;
import com.example.cronJob.repository.inter.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/demo")
public class PostController {
    @Autowired
    private PostRepository postRepository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Post> getAlluser(){
        return postRepository.findAll();
    }
}
