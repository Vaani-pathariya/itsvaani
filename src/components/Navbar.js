import React from "react";
import { Link } from "react-router-dom";
import "../css/fonts.css"
import "../css/navbar.css"
const Navbar=()=>{
    return(
        <div className="simple navbar">
            <div className="distancing">
                VAANI PATHARIYA
            </div>
            <div className="navbar">
                <div className="distancing">Projects</div>
                <div className="distancing">About</div>
                <div className="distancing">Achievements</div>
                <Link to="https://docs.google.com/document/d/1Z__ctW52pfz23cMU8gy8IPLWTGpKy9Vj5FK3lwP7Nns/edit?usp=sharing"><div className="distancing">Resume</div></Link>
                <div className="connect">Let's Connect</div>
            </div>
        </div>
    )
}
export default Navbar;