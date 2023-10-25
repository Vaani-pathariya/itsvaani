import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/fonts.css"
import "../css/landing.css"
import test from "../assets/wall.jpg"
import p1 from "../assets/sehat.png"
import p2 from "../assets/p2.png"
import p5 from "../assets/p5.png"
import p4 from "../assets/p4.png"
import p3 from "../assets/p3.png"
import p7 from "../assets/p7.png"
import p6 from "../assets/p6.png"
import Achievement from "./Achievements";
import About from "./About";
import Connect from "./Connect";
const Landing=()=>{
    return (
        <div className="landing">
            <div>
            <Navbar/>
            </div>
            <div className="sizing">
                <div className="new-font above-text">EXPLORING TECH</div>
                <div className="changed-font siz">Full Stack Web Development<br></br>Machine Learning</div>
                <div className="below-text new-font">Crafting Digital Worlds, One Line of Code at a Time.</div>
                <div className="new-font tab">Explore my Projects</div>
            </div>
            <div className="projects">

                <div className="flex top-center">
                <div className="card">
                    <Link to="/p1"><img src={p1}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">Sehat</div>
                        <div className="skills">Skills</div>
                    </div>
                </div>   
                <div className="card">
                    <Link><img src={p5}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">Title</div>
                        <div className="skills">Skills</div>
                    </div>
                </div>   
                </div>      
                ////
                <div className="flex top-center">
                <div className="card">
                    <Link><img src={p2}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">Title</div>
                        <div className="skills">Skills</div>
                    </div>
                </div>   
                <div className="card">
                    <Link><img src={p4}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">Title</div>
                        <div className="skills">Skills</div>
                    </div>
                </div>   
                </div>    
                <div className="flex top-center">
                <div className="card">
                    <Link><img src={p6}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">Title</div>
                        <div className="skills">Skills</div>
                    </div>
                </div>   
                <div className="card">
                    <Link><img src={p7}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">Title</div>
                        <div className="skills">Skills</div>
                    </div>
                </div>   
                </div>        
                <div className="flex top-center">
                <div className="card">
                    <Link><img src={p3}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">Title</div>
                        <div className="skills">Skills</div>
                    </div>
                </div>   
                <div className="card">
                    <Link><img src={p3}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">Title</div>
                        <div className="skills">Skills</div>
                    </div>
                </div>   
                </div>             
            </div>
            <Achievement/>
            <About/>
            <Connect/>
        </div>
    )
}
export default Landing;