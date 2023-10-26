import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/fonts.css"
import "../css/landing.css"
import p1 from "../assets/sehat.png"
import p2 from "../assets/p2.png"
import p5 from "../assets/p5.png"
import p4 from "../assets/p4.png"
import p3 from "../assets/p3.png"
import p8 from "../assets/p8.png"
import p7 from "../assets/p7.png"
import p10 from "../assets/p10.png"
import p9 from "../assets/p9.png"
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
                <div className="new-font tab" id="projects">Explore my Projects</div>
            </div>
            <div className="projects">

                <div className="flex top-center">
                <div className="card">
                    <Link to="/p1"><img src={p1}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">SEHAT</div>
                        <div className="skills">React, Vite, Firebase, Python, Machine Learning</div>
                    </div>
                </div>   
                <div className="card">
                    <Link to="/p2"><img src={p5}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">ISLIFE</div>
                        <div className="skills">React, Python, Machine Learning, OpenCV, Scikit Learn </div>
                    </div>
                </div>   
                </div>      
                ////
                <div className="flex top-center">
                <div className="card">
                    <Link to="/p3"><img src={p2}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">THERAPY PAL</div>
                        <div className="skills">React, Python, Machine Learning, OpenCV, Scikit Learn, Android, Kotlin</div>
                    </div>
                </div>   
                <div className="card">
                    <Link to="/p4"><img src={p4}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">AMAZON CLONE</div>
                        <div className="skills">React, NodeJS, MongoDB, Express</div>
                    </div>
                </div>   
                </div>    
                <div className="flex top-center">
                <div className="card">
                    <Link to="/p5"><img src={p8}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">ESUMMIT'23 WEBSITE</div>
                        <div className="skills">React, Firebase, EmailJS, Payment Integration</div>
                    </div>
                </div>   
                <div className="card">
                    <Link to="/p6"><img src={p7}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">DIALECT</div>
                        <div className="skills">Google Translate, React, Rest API</div>
                    </div>
                </div>   
                </div>        
                <div className="flex top-center">
                <div className="card">
                    <Link to="/p7"><img src={p6}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">AEROFLY</div>
                        <div className="skills">React, Machine Learing, Scikit learn</div>
                    </div>
                </div>   
                <div className="card">
                    <Link to="/p8"><img src={p3}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">HOLA</div>
                        <div className="skills">React, CSS, MongoDB, NodeJS</div>
                    </div>
                </div>   
                </div>         
                <div className="flex top-center">
                <div className="card">
                    <Link to="/p9"><img src={p9}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">SCAM SHIELD</div>
                        <div className="skills">React, Machine Learning, Scikit Learn</div>
                    </div>
                </div>   
                <div className="card">
                    <Link to="/p10"><img src={p10}></img></Link>
                    <div className="new-font  top-margin  space">
                        <div className="bold">LEVEL UP</div>
                        <div className="skills">Android, Kotlin, NodeJS, Firebase</div>
                    </div>
                </div>   
                </div>             
            </div>
            <Achievement />
            <About />
            <Connect/>
        </div>
    )
}
export default Landing;