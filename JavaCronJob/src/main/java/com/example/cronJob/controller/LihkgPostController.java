package com.example.cronJob.controller;

import com.example.cronJob.model.Lihkgcomment;
import com.example.cronJob.model.Lihkgpost;
import com.example.cronJob.repository.lihkgcommentRepository;
import com.example.cronJob.repository.lihkgpostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/lihkg")
public class LihkgPostController {
    @Autowired
    private lihkgpostRepository repo;
    @Autowired
    private lihkgcommentRepository commentRepo;

    @GetMapping(path="/allpost")
    public @ResponseBody Iterable<Lihkgpost> getAlluser(){
        return repo.findAll();
    }

    @GetMapping(path="allcomment")
    public @ResponseBody Iterable<Lihkgcomment> getAllCommet(){
        return commentRepo.findAll();
    }


}
