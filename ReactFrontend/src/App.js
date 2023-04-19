import './App.css';
import './data'
import React, { useState } from "react";
import { Userdata, bardata1, bardata2, bardata3, linedata, piedata } from './data';
import { Bar, Line, Pie}from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Routes, Route } from "react-router-dom";
import SideBar from "./component/SideBar/SideBar";
import MainPage from "./component/MainPage";
import DataPage from './component/DataPage/DataPage';
import TestPage from './component/TestPage';
import ScraperPage from './component/ScraperPage/ScraperPage';
import AnalysisPage from './component/AnalysisPage/AnalysisPage';
import SentimentPage from './component/SentimentPage/SentimentPage';

const App = () => {
  return(
    <div className='App'>
      <div className='Container'>
      <SideBar />
      <Routes>
        <Route path="/main" element = {<ScraperPage />} />
        <Route path="/data" element = {<DataPage />} />
        <Route path="/testing" element = {<AnalysisPage />} />
        <Route path="/sentiment" element = {<SentimentPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
