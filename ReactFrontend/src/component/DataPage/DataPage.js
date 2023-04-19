import React from "react";
import "./DataPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../HelperComponent/Dropdown";
import Dinput from "../HelperComponent/dInput";
import CategoryDropDown from "../HelperComponent/CategoryDropDown";
import PostTable from "./HelperComponent/PostTable"
import CommentTable from "./HelperComponent/CommentTable";


const DataPage = () => {
    const [type, setType] = useState("Block Event");
    const [forum, setForum] = useState("Lihkg");
    const [category, setCategory] = useState([""]);
    const [myData, setMyData] = useState([{"id":"eb052cd5cdaa125f359b58ad6d1d65c6a330baa7f83d2d3bf80abc807c05526a","block_number":"44","chaincode":"fabcar","function":"createCar","arg":"CAR12-Honda-Accord-Black-Tom","submiter":"Org1MSP"}]);
    useEffect(() => {
        var r;
        if(type == "Block Event"){
            r = "block";
        }else if(type == "Docker Statistics"){
            r = "docker";
        }else{
            r = "alls";
        }
        console.log(type);
        axios({url: "http://localhost:3002" + '/history/' + r, method: 'get'}).then((response) => {
          console.log(response.data);
          setMyData(response.data);
          
        });
      }, [type])


    return(
        <div className="dataPage">          
            <h3>Data Page  </h3> 
            <div className="dropDownContainer">
            
            <Dropdown type={forum} setType={setForum}></Dropdown>

            <CategoryDropDown type={category} setType={setCategory}></CategoryDropDown>
            <Dinput></Dinput>
            </div>

            

            <PostTable></PostTable>

            <CommentTable></CommentTable>
        </div>
    )
}


export default DataPage;