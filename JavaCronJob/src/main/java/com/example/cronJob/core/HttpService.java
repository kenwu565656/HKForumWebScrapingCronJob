package com.example.cronJob.core;

import com.example.cronJob.repository.CronjobcontrolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class HttpService {
    private final RestTemplate restTemplate;

    public HttpService(RestTemplateBuilder restTemplateBuilder){
        this.restTemplate = restTemplateBuilder.build();
    }

    public String get(String url){
        String res = restTemplate.getForObject(url, String.class);
        return res;
    }
}
