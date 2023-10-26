import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/p10.png"
const P10=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">LEVEL UP</div>
                <div className="below-textp new-font">Elevate Your Skills, Expand Your Horizons: Level Up - Your Path to Vocational Excellence</div>
                <img src={test} className="project-img"></img>
                <div className="below-textp new-font content">Introducing "Level Up," your gateway to a world of vocational opportunities and skill enhancement. Powered by Android, Kotlin, Node.js, and Firebase, our project is designed to empower individuals with the latest information on vocational courses in their area. But Level Up goes beyond that – it connects you with fellow learners through video calls, creating a vibrant community of knowledge seekers.<br></br>

In a rapidly changing job market, the quest for new skills and knowledge is more critical than ever. Level Up is your partner in this journey, helping you discover, enroll, and connect, all in one platform. Whether you're looking to advance your career or explore new passions, Level Up is here to guide you. Elevate your skills, embrace new opportunities, and level up your life with Level Up.</div>
                <Link to="https://github.com/Vaani-pathariya/Education"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default P10;