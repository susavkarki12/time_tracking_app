package com.example.app_development.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "app_usage")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppUsage {

    @Id
    private String id;
    private String userId;
    private String appName;
    private long usageTime;
    private long timeStamp;   
}
