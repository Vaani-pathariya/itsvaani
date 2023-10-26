import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/p2.png"
const P3=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">THERAPY PAL</div>
                <div className="below-textp new-font">Breaking Barriers to Mental Wellness: Empowering Lives, One Quiz at a Time</div>
                <img src={test} className="project-img"></img>
                <div className="below-textp new-font content">Our project, "Breaking Barriers to Mental Wellness- Therapy Pal, " leverages the power of cutting-edge technology to make a positive impact on mental health. By seamlessly integrating Machine Learning, Firebase, Android, Python, and React, we've created a dynamic and comprehensive solution that guides individuals towards the care they need. With this unique blend of technology and empathy, we're committed to revolutionizing the way mental health support is delivered, making it accessible, personalized, and effective. Join us in harnessing the potential of these advanced tools to break down barriers and champion mental wellness for all.</div>
                <Link to="https://github.com/Vaani-pathariya/Trident"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default P3;