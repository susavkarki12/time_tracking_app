package com.example.app_development.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.app_development.model.AppUsage;
import com.example.app_development.service.AppUsageService;


@RestController
@RequestMapping("/api/app-usage")
public class AppUsageController {
    @Autowired
    private AppUsageService appUsageService;

    @PostMapping
    public AppUsage saveAppUsage(@RequestBody AppUsage appUsage){
        return appUsageService.saveAppUsage(appUsage);
    }

    @GetMapping("{userId}")
    public List<AppUsage> getAppUsageByUserId(@PathVariable String userId){
        return appUsageService.getAppUsageByUserId(userId);
    }

    
}
