import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/p8.png"
const P5=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">ESUMMIT WEBSITE</div>
                <div className="below-textp new-font">"Elevate Your Vision, Ignite Your Future: JSS Esummit 2023"</div>
                <img src={test} className="project-img"></img>
                <div className="below-textp new-font content">Welcome to the virtual gateway of innovation and inspiration, the College Esummit 2023! We're proud to present this dynamic platform that embodies the spirit of entrepreneurship and creativity. Powered by the cutting-edge technology of React, our website not only provides information but also offers seamless email integration and secure payment options, ensuring a smooth and engaging experience for our participants and attendees.<br></br>

Esummit 2023 is where brilliant minds converge, ideas flourish, and future leaders are born. With a blend of captivating speakers, hands-on workshops, and thought-provoking discussions, this digital hub serves as the nucleus of innovation and entrepreneurial growth.<br></br>

Join us on this exciting journey of ideation, collaboration, and progress. Let JSS Esummit 2023 be your compass to navigate the ever-evolving landscape of entrepreneurship, and together, let's shape a future full of opportunities and achievements.</div>
                <Link to="https://github.com/Vaani-pathariya/ESummit23"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default P5;