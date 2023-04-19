package com.example.cronJob.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Lihkgpost {
    @Id
    private Integer id;
    private String Url;
    private String Topic;
    private String Socialmediasource;
    private String PostID;
    private String PosterID;
    private String Postdate;
    private String Postername;
    private String posttext;
    private Integer Totallike;
    private Integer Totalunlike;
    private Integer Totallove;
    private Integer Totalhaha;
    private Integer Totalyay;
    private Integer Totalwow;
    private Integer Totalsad;
    private Integer Totalangry;
    private String createdtime;
}
