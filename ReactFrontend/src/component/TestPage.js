import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Line, Pie }from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import BasicCard from "./NumberCard";
import "./TestPage.css";
import Button from '@mui/material/Button';
import NewChatForm from "./Form";
import Alert from '@mui/material/Alert';
import TextareaAutosize from '@mui/base/TextareaAutosize';





const TestPage = () => {
    const [total_filter, setTotal_filter] = useState(["memory Usage", "CPU Usage", "rx Bytes", "tx Bytes"]);
    const [testing, setTesting] = useState(0);
    const [s, setS] = useState(0);
    const [result, setResult] = useState("");
    const [open, setOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(() => {
        let mylist = [];
        for(var i = 0; i < total_filter.length; i++){
            mylist.push(false);
        }
        return mylist;
    });
    const handleTagOnclick = (key) => {
        let changeList = selectedFilter;
        let index = key;
        changeList[index] = changeList[index]? false : true;
        setSelectedFilter([...changeList]);
        console.log(selectedFilter);
    }

    const total_method = ["oneSample T-test", "twoSample T-test", "Stationary"];
    const [selectedMethod, setSelectedMethod] = useState(() => {
        let mylist = [];
        for(var i = 0; i < total_filter.length; i++){
            mylist.push(false);
        }
        return mylist;
    });
    const handleMethodOnclick = (key) => {
        let changeList = selectedMethod;
        let index = key;
        changeList[index] = changeList[index]? false : true;
        setSelectedMethod([...changeList]);
        console.log(selectedMethod);
    }

    useEffect(() => {
        if(testing%2 == 1){
            var r = 'all';
        }else{
            var r = 'one';
        }
        axios({url: "http://localhost:3002" + '/stat/' + r, method: 'get'}).then((response) => {
          console.log(response.data);
          setResult(response);
        });
      }, [testing]);

      useEffect(() => {
        axios({url: "http://localhost:3002" + '/history/sampleOne', method: 'get'}).then((response) => {
          console.log(response.data);
          setTotal_filter(total_filter.concat(response.data));
        });
      }, [s]);

      useEffect(() => {
        axios({url: "http://localhost:3002" + '/history/sample', method: 'get'}).then((response) => {
          console.log(response.data);
          setTotal_filter(total_filter.concat(response.data));
        });
      }, []);


    
    return(
        <div className="testPage">
            <h3>Testing Samples</h3>
                <div className="sample_row">
                    {
                        total_filter.map((t, key) => {
                            return(
                                <span className={selectedFilter[key]?"small":"small selected"} onClick={(e) => handleTagOnclick(key)} key={key}>
                            {t}
                        </span>
                            ) 
                        })
                    }


                <Button className="small" variant="contained" onClick={(e) => setOpen(true)}>+</Button>

                </div>

            <h3>Tesing Method</h3>

            <div className="testing_row">
                    {
                        total_method.map((t, key) => {
                            return(
                                <span className={selectedMethod[key]?"small":"small selected"} onClick={(e) => handleMethodOnclick(key)} key={key}>
                            {t}
                        </span>
                            ) 
                        })
                    }

                </div>

                <div>
                <Button variant="contained" onClick={(e) => setTesting(testing + 1)}>Run Test</Button>
                </div>

                <h3>Result</h3>
                <TextareaAutosize minRows={30} value={JSON.stringify(result.data)}></TextareaAutosize>


                <NewChatForm open={open} setOpen={setOpen} setS={setS} s= {s}/>
                

            

        </div>
    )
}

export default TestPage;
