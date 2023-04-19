import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './AnalysisPage.css';

const AnalysisPage = () => {

    return(
        <div className="analysisPage">
            <h3>Topic Detection Analysis</h3>
            <iframe src="demo.html" className="result"></iframe>
                

            

        </div>
    )
}

export default AnalysisPage;