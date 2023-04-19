package com.example.cronJob.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Lihkgcomment {
    @Id
    private Integer id;
    private String CommenterID;
    private String Commentdate;
    private String Commentername;
    private String commenttext;
    private String replytoname;
    private String replytoid;
    private Integer commentfloor;
    private String Reply;
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
