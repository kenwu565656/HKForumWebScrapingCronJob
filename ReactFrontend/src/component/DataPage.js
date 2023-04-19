import React from "react";
import "./DataPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Line, Pie }from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import BasicCard from "./NumberCard";
import N from "./newTable";
import Input from "./input";
import Dropdown from "./Dropdown";
import D from "./DockerTable";
import Dinput from "./dInput";
import H from "./HistoryTable";


const DataPage = () => {
    const [type, setType] = useState("Block Event");
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

            <h3>DataPage</h3>
            <Dropdown type={type} setType={setType}></Dropdown>

            {type == "Block Event"?<Input></Input>: type == "Docker Statistics" ? <Dinput></Dinput>: <br/>}

            

            {type == "Block Event"?<N data={myData}></N>: type == "Docker Statistics" ? <D data = {myData}></D>: <H data={myData}></H>}
            

            

        </div>
    )
}


export default DataPage;


