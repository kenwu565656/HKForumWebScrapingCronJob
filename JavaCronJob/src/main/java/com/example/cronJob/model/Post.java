package com.example.cronJob.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Post {
    @Id
    private Integer id;
    private String Url;
    private String Topic;
    private String Socialmediasource;
    private String PostiD;
    private String PosterID;
    private String Postdate;
    private String PosterName;
    private String postText;
    private Integer TotalLike;
    private Integer TotalUnlike;
    private Integer TotalLove;
    private Integer TotalHaha;
    private Integer TotalYay;
    private Integer TotalWow;
    private Integer TotalSad;
    private Integer TotalAngry;
    private String createdtime;
}
