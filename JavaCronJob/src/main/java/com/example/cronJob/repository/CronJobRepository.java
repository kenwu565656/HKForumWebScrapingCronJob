package com.example.cronJob.repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class CronJobRepository {

    public Map<String, String> findJob(){
        Map<String, String> cronJobDetail = new HashMap<String, String>();
        cronJobDetail.put("lihkg", "17");
        return cronJobDetail;
    }

}
