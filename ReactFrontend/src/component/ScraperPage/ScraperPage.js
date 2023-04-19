import React from "react";
import "./ScraperPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../HelperComponent/Dropdown";
import CategoryDropDown from "../HelperComponent/CategoryDropDown";
import CronTable from "./HelperComponent/cronTable";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NewCronJobForm from "./HelperComponent/NewCronJobForm";


const ScraperPage = () => {
    const [forum, setForum] = useState("lihkg");
    const [category, setCategory] = useState("");
    const [enddate, setEnddate] = useState(0);
    const [myData, setMyData] = useState([]);
    const [open, setOpen] = useState(false);
    const ariaLabel = { 'aria-label': 'description' };
    useEffect(() => {
        axios({url: "http://localhost:8080" + '/cronjob/all', method: 'get'}).then((response) => {
          console.log(response.data);
          setMyData(response.data);
          
        });
      }, [])


    return(
        <div className="scraperPage">
            <h3>Scraper Page</h3>
            <h5>Schelue new Scraper</h5>
            <div className="scraperPageDropDownContainer">
            <Dropdown type={forum} setType={setForum}></Dropdown>
            <CategoryDropDown type={category} setType={setCategory}></CategoryDropDown>

            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 }
      }}
      noValidate
      autoComplete="off"
    >
      <Input placeholder="Interval Days" inputProps={ariaLabel} value={enddate} onChange={(event) => setEnddate(event.target.value)}/>
      <Button variant="contained" onClick={event => setOpen(true)}>ADD</Button>
    </Box>
            </div>

            <h5>Existing Scraper</h5>
            <CronTable data={myData}></CronTable>

            <NewCronJobForm open={open} setOpen={setOpen} pforum={forum} pcategory={category} penddate={enddate}></NewCronJobForm>

            


            

            
            

        </div>
    )
}


export default ScraperPage;