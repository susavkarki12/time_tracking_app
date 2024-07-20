package com.example.app_development.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.app_development.model.AppUsage;

public interface AppUsageRepository extends MongoRepository<AppUsage, String> {
    List<AppUsage> findByUserId(String userId);
    
}
