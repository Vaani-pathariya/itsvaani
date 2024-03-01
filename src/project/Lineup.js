import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/lineup.png"
const Lineup=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">LINEUP</div>
                <div className="below-textp new-font">"Navigate the unknown, connect with your team, and climb the leaderboard in Lineup – where every QR code reveals a potential ally or a cunning imposter!</div>
                <Link to="https://github.com/Vaani-pathariya/Lineup-backend"><img src={test} className="project-img"></img></Link>
                <div className="below-textp new-font content">
                Lineup: A thrilling game of strategic connection where players leverage QR codes to track down and scan their hidden teammates, earning points and climbing the leaderboard. Uncover the power of teamwork in a race against time and deception
                </div>
                <Link to="https://github.com/Vaani-pathariya/Lineup-backend"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default Lineup;