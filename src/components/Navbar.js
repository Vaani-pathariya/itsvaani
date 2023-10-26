import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../css/fonts.css"
import "../css/navbar.css"
const Navbar=()=>{
    return(
        <div className="simple navbar navbar-min-setting">
            <div className="distancing">
                VAANI PATHARIYA
            </div>
            <div className="navbar">
                <div className="distancing"><HashLink to='#projects'>Projects</HashLink></div>
                <div className="distancing"><HashLink to='#about'>About</HashLink></div>
                <div className="distancing"><HashLink to='#achievements'>Achievements</HashLink></div>
                <Link to="https://docs.google.com/document/d/1Z__ctW52pfz23cMU8gy8IPLWTGpKy9Vj5FK3lwP7Nns/edit?usp=sharing"><div className="distancing">Resume</div></Link>
                <div className="connect"><HashLink to='#connect'>Let's Connect</HashLink></div>
            </div>
        </div>
    )
}
export default Navbar;