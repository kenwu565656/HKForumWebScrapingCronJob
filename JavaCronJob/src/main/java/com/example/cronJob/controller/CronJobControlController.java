package com.example.cronJob.controller;

import com.example.cronJob.model.Cronjobcontrol;
import com.example.cronJob.repository.CronjobcontrolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Map;

@RestController
@RequestMapping(path="/cronjob")
public class CronJobControlController {
    @Autowired
    private CronjobcontrolRepository repo;

    @CrossOrigin(value = "http://localhost:3000")
    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Cronjobcontrol> getAll(){
        return repo.findAll();
    }

    @CrossOrigin(value = "http://localhost:3000")
    @PostMapping(path = "/add")
    public @ResponseBody void addNewCronJob(@RequestBody Map<String, String> params){
        var newCronJob = new Cronjobcontrol();
        System.out.println(params);
        newCronJob.setForum(params.get("forum"));
        newCronJob.setCategory(params.get("category"));
        java.sql.Timestamp timestamp = new Timestamp(new Date(new Date().getTime() +
                1000 * 60 * 60 * 24 * Integer.parseInt(params.get("enddate"))).getTime());
        newCronJob.setEnddate(timestamp);
        repo.save(newCronJob);
    }
}
