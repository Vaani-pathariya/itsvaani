import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/sehat.png"
const P1=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">SEHAT</div>
                <div className="below-textp new-font">System for Enhanced Healthcare Assistance & Telemedicine</div>
                <Link to="https://github.com/Vaani-pathariya/SIH2023-SEHAT"><img src={test} className="project-img"></img></Link>
                <div className="below-textp new-font content">Introducing "Sehat" - Bridging Rural Healthcare Gaps<br></br>
In rural India, where over 65-70% of the population resides, access to healthcare remains a significant challenge, with just 13% having access and only 5% utilizing it. "Sehat" is a transformative Windows software that leverages Machine Learning, React, Vite, Firebase, and Python to connect remote communities with healthcare facilities. It breaks down geographical barriers, enhancing healthcare access and inclusivity, making a profound impact on rural healthcare in India.</div>
                <Link to="https://github.com/Vaani-pathariya/SIH2023-SEHAT"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default P1;