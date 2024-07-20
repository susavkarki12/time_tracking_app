package com.example.app_development.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.app_development.model.AppUsage;
import com.example.app_development.repository.AppUsageRepository;

import java.util.List;

@Service
public class AppUsageService {
    @Autowired
    private AppUsageRepository appUsageRepository;

    public AppUsage saveAppUsage(AppUsage appUsage){

        return appUsageRepository.save(appUsage);
    }

    public List<AppUsage> getAppUsageByUserId(String userId) {
        return appUsageRepository.findByUserId(userId);
    }
}
