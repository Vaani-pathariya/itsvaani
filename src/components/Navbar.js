import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../css/fonts.css"
import "../css/navbar.css"
import menu from "../assets/icons8-hamburger-menu-100.png"
const Navbar=()=>{
    const [display,setDisplay]=useState(false);
    const show_menu=()=>{
        setDisplay(!display)
    }
    return(
        <div>
        <div className="simple navbar">
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
        <div className="small-navbar">
            <div>
            <img src={menu} onClick={show_menu}></img>
            </div>
            {(display)&&
                <div className="simple menu">
                    <div>
                <div  className="auto_spacing">VAANI PATHARIYA</div>
                <div  className="auto_spacing"><HashLink to='#projects'>Projects</HashLink></div>
                <div  className="auto_spacing"><HashLink to='#about'>About</HashLink></div>
                <div  className="auto_spacing"><HashLink to='#achievements'>Achievements</HashLink></div>
                <Link to="https://drive.google.com/file/d/1rNeTEyJc3rB57B5YioQULNWtDJ7izi2F/view?usp=sharing"><div className="auto_spacing">Resume</div></Link>
                <div className="connect auto_spacing"><HashLink to='#connect'>Let's Connect</HashLink></div>
            </div>
                </div>
            }
        </div>
        </div>
    )
}
export default Navbar;