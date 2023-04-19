package com.example.cronJob;

import com.example.cronJob.core.HttpService;
import com.example.cronJob.repository.CronjobcontrolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class CronJob {
    @Autowired
    private CronjobcontrolRepository repo;
    @Autowired
    private HttpService httpService;
    @Scheduled(cron="0 0 6 * * *")
    public void printOut(){
        var record = repo.findAll();
        for(var entry : record){
            System.out.println(entry.getForum());
            var res = httpService.get("http://127.0.0.1:5000/scraper/" + entry.getForum() + "/" + entry.getCategory());
        }
    }
}
