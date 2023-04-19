import React from "react";
import "./MainPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Line, Pie }from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import BasicCard from "./NumberCard";

const MainPage = () =>{
  const [data, setData] = useState({
    cpu: [
      2.780212367270456,
      3.3625584009993754,
      2.5056836861768366,
      1.7126471686372122,
      3.6254825870646767,
      1.3335630461922596,
      1.8670617283950617,
      1.9301528899937848
    ],
    mem: [
      0.30328501138644137,
      0.3011798258688884,
      0.2994587982924948,
      0.2974304443631737,
      0.2962779705396958,
      0.2953713577985599,
      0.2473669814712942,
      0.2473669814712942
    ],
    rx: 2824620,
    tx: 3210897,
    new_tran: [
      {
        id: '11f40963f43ae7fc54de8d1f36e9930a09e5404a2f44a38600c29566ab5bc457',
        block_number: '37',
        chaincode: 'fabcar',
        function: 'createCar',
        arg: 'CAR12-Honda-Accord-Black-Tom',
        submiter: 'Org1MSP'
      },
      {
        id: 'b760a93b2ef67e39a53791917c36ddc51b9a446ccc1ea469f3e8dba10f7250e9',
        block_number: '37',
        chaincode: 'fabcar',
        function: 'createCar',
        arg: 'CAR12-Honda-Accord-Black-Tom',
        submiter: 'Org1MSP'
      },
      {
        id: '91788b34eac422cf5f0d21c681fb0317bd23b2c72f2aa2f6661d9c817c962643',
        block_number: '37',
        chaincode: 'fabcar',
        function: 'createCar',
        arg: 'CAR12-Honda-Accord-Black-Tom',
        submiter: 'Org1MSP'
      },
      {
        id: '3eef9d3c8aedc96b955045d92e3b56304db3afb821624dfcfbca97a1d0ceb4fb',
        block_number: '37',
        chaincode: 'fabcar',
        function: 'createCar',
        arg: 'CAR12-Honda-Accord-Black-Tom',
        submiter: 'Org1MSP'
      },
      {
        id: '9be4794f12ae68d4fac9c11ce00976ecf56f0bdaa9bab7b89d669e57e61ed7d6',
        block_number: '37',
        chaincode: 'fabcar',
        function: 'createCar',
        arg: 'CAR12-Honda-Accord-Black-Tom',
        submiter: 'Org1MSP'
      }
    ],
    total_tran: 55,
    submitByOrg1MSP: 52,
    submitByOrg2MSP: 3,
    chaincode_fabcar_count: 52,
    chaincode_lifecycle_count: 3,
    function_createCar_count: 51,
    function_changeCarOwner_count: 0,
    function_deleteCar_count: 0,
    function_initLedger_count: 1,
    function_commit_count: 1,
    function_approval_count: 2,
    time: "2022-12-17T09:28:35.198+00z"
  });

  const [date, setDate] = useState([]);

  function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

  useEffect(() => {
    axios({url: "http://localhost:3002" + '/history/all', method: 'get'}).then((response) => {
      console.log(response.data[0]);
      let d = new Date(response.data[0].time);
      console.log(d);
      let mylist = [];
      for(let i = 0;i < 8;i++){
        d.setSeconds(d.getSeconds() + 5);
        mylist.push(addZero(d.getMinutes()) + ":" + addZero(d.getSeconds()));
      }
      setDate(mylist);
      setData(response.data[0]);
    });
  }, []);


    return(
      <div className='mainPage'>
        <h2>Dashboard</h2>
        <h4>Transaction</h4>
        <div className="row">  
            <div className='number_box_container'>
              <div className='numberBox'>
               <h3>{"Total Transaction"}</h3>
               <p className='number'>{data.total_tran}</p>
              </div>

              <div className='numberBox'>
               <h3>{"Total Block"}</h3>
               <p className='number'>{data.new_tran[0].block_number}</p>
              </div>

              <div className="tran_box"> 
                <h4>{"Block Number: " + data.new_tran[0].block_number}</h4>
                <span>{"tx_id: " + data.new_tran[0].id}</span>
                <span>{"chaincode: " + data.new_tran[0].chaincode + "      |        function: " + data.new_tran[0].function}</span>
                <span>{"arg: " + data.new_tran[0].arg}</span>
                <span>{"creator: " + data.new_tran[0].submiter}</span>
              </div>

              <div className="tran_box"> 
                <h4>{"Block Number: " + data.new_tran[1].block_number}</h4>
                <span>{"tx_id: " + data.new_tran[1].id}</span>
                <span>{"chaincode: " + data.new_tran[1].chaincode + "      |        function: " + data.new_tran[1].function}</span>
                <span>{"arg: " + data.new_tran[1].arg}</span>
                <span>{"creator: " + data.new_tran[1].submiter}</span>
              </div>

              
            </div>

            

        </div>
        <div className="chartRow2">
          <div>
        <Bar data={{
    labels: ["Org1MSP", "Org2MSP"],
    datasets: [
      {
        label: "Transaction Creator",
        data: [data.submitByOrg1MSP, data.submitByOrg2MSP],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
      },
    ],
  }} height="150px" width={"500px"}/>
  </div>

<div>
<Bar data = {{
    labels: ["fabcar", "_lifecycle"],
    datasets: [
      {
        label: "Chain code",
        data: [data.chaincode_fabcar_count, data.chaincode_lifecycle_count],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "white"
      },
    ],
  }} height="150px" width={"500px"}/>
  </div>

  <div>
<Bar data = {{
    labels: ["createCar", "deleteCar", "approval", "changeCarOwner", "Commit", "initLedger"],
    datasets: [
      {
        label: "Chain code function",
        data: [data.function_createCar_count, data.function_deleteCar_count, data.function_approval_count, data.function_changeCarOwner_count, data.function_commit_count, data.function_initLedger_count],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black"
      },
    ],
  }} height="150px" width={"500px"}/>
  </div>

        </div>


        
        <h4>Network</h4>
        <div className="white_background">
            <Line data={{
    labels: date,
    datasets: [
      {
        label: "CPU usage",
        data: data.cpu,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }} height="200px" width="1600vw" className={"line_chart"}/>
        </div>

        <div className="white_background">
            <Line data={{
    labels: date,
    datasets: [
      {
        label: "Memory usage",
        data: data.mem,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }} height="200px" width="1600vw" className={"line_chart"}/>
        </div>

      
      </div>
  
    );
  };

export default MainPage;