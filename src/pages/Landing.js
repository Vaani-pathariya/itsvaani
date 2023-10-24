import React from "react";
import Navbar from "../components/Navbar";
import "../css/fonts.css"
import "../css/landing.css"
import test from "../assets/wall.jpg"
const Landing=()=>{
    return (
        <div className="landing">
            <div>
            <Navbar/>
            </div>
            <div className="sizing">
                <div className="new-font above-text">EXPLORING TECH</div>
                <div className="changed-font siz">Full Stack Web Development Machine Learning</div>
                <div className="below-text new-font">Crafting Digital Worlds, One Line of Code at a Time.</div>
                <div className="new-font tab">Explore my Projects</div>
            </div>
            <div className="projects">
                <div className="flex">
                <div className="card">
                    <img src={test}></img>
                    <div className="new-font black top-margin flex space">
                        <div className="bold">Title</div>
                        <div>Skills</div>
                    </div>
                </div>   
                <div className="card">
                    <img src={test}></img>
                    <div className="new-font black top-margin flex space">
                        <div className="bold">Title</div>
                        <div>Skills</div>
                    </div>
                </div>   
                </div>      
                ////
                <div className="flex">
                <div className="card">
                    <img src={test}></img>
                    <div className="new-font black top-margin flex space">
                        <div className="bold">Title</div>
                        <div>Skills</div>
                    </div>
                </div>   
                <div className="card">
                    <img src={test}></img>
                    <div className="new-font black top-margin flex space">
                        <div className="bold">Title</div>
                        <div>Skills</div>
                    </div>
                </div>   
                </div>             
            </div>
        </div>
    )
}
export default Landing;