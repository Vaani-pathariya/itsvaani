import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/p5.png"
const P2=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">ISLIFE</div>
                <div className="below-textp new-font">Bridging the communication gap between ISL users and non-ISL users</div>
                <Link to="https://github.com/Vaani-pathariya/ASL-Project-SSFT"><img src={test} className="project-img"></img></Link>
                <div className="below-textp new-font content">Introducing "ISLife" - Empowering ISL Users<br></br>

"ISLife" is a groundbreaking project addressing the communication challenges faced by Indian Sign Language (ISL) users. It offers real-time conversion of spoken language to ISL, fostering seamless communication between ISL and non-ISL users. With a user-friendly mobile app (in development phase) and web platform, ISLife ensures easy access to its services, promoting inclusivity and recognition of ISL in society.</div>
                <Link to="https://github.com/Vaani-pathariya/ASL-Project-SSFT"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default P2;