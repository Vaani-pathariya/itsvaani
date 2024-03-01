import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/p6.png"
const P7=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">AEROFLY</div>
                <div className="below-textp new-font">Smooth Skies Ahead: Aerofly - Your Flight Delay Predictor and Peace of Mind Companion.</div>
                <Link to="https://github.com/Vaani-pathariya/Aerofly"><img src={test} className="project-img"></img></Link>
                <div className="below-textp new-font content">Introducing "Aerofly," your guardian of hassle-free travel. In a world where flight delays can disrupt the best-laid plans, our innovative project, powered by Machine Learning and the Scikit-learn library, has your back. Aerofly uses predictive algorithms to foresee potential flight delays and promptly notifies passengers, allowing them to plan and adapt with ease.<br></br>
Built with Python and React, our user-friendly interface ensures that you're always one step ahead, so you can enjoy your journey with confidence. Say goodbye to airport anxieties and hello to the peace of mind that comes with Aerofly. Welcome to the future of stress-free travel.</div>
                <Link to="https://github.com/Vaani-pathariya/Aerofly"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default P7;