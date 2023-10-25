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
                <div className="below-textp new-font">Tagline of the project</div>
                <img src={test} className="project-img"></img>
                <div className="below-textp new-font content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                <Link to="https://github.com/Vaani-pathariya/Trident"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default P3;