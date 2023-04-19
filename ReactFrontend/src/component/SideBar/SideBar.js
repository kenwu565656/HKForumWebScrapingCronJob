import React from "react";
import "./SideBar.css";
import { useState } from "react";
import {Link} from "react-router-dom";

const SideBar = () =>{
    const [selected, setSelected] = useState(0);
    const sidebar = ["Scraper", "Data", "Topic Detection", "Sentiment Analysis", "Setting"];
    const path = ["/main", "/data", "/testing", "/sentiment", "*"];
    const handleChange = (index) =>{
      setSelected(index);
    }
    return(
      <div className='sidebar'>
      <div className='logo'>
        <span>
          HK Forum Sentiment Analysis
        </span>
      </div>
      <div className='menu'>
      {
        sidebar.map((item, index) => {
          return(
            <Link to={path[index]}>
            <div className={selected === index ? "menuItem active" : "menuItem"} key={index} onClick={() => handleChange(index)}>
             <span><b>{item}</b></span>
            </div>
            </Link>
          )
        })
      }
  
      </div>
      </div>
  
    );
  };

  export default SideBar;
