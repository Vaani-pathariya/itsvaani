import "./portfolio.css";
import gif from "../assets/gif.gif"
import { useEffect, useState } from "react";
const Portfolio=()=>{
    return (
        <div className="main">
            <div className="main-left">
                <h1 className="static-text">Exploring Tech</h1>
                <h1 className="changing-text">Hi! I'm Vaani Pathariya<br/></h1>
                <h2>A full stack web developer,</h2>
                <h2>Data Science and Devops enthusiast</h2>
                
            </div>
            <div className="main-right">
                <img src={gif}/>
            </div>
        </div>
    )
}
export default Portfolio;