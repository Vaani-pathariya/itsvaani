import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/flatify.png"
const Flatify=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">FLATIFY</div>
                <div className="below-textp new-font">Swipe your way to the perfect flatshare! Flatify – Where Finding Your Ideal Flatmates and Hostel Flats is Effortlessly Modern</div>
                <img src={test} className="project-img"></img>
                <div className="below-textp new-font content">
                Flatify: Your Ultimate Student Housing Companion. Seamlessly connect with potential flatmates, explore hostel flats, and simplify your accommodation search. With real-time messaging and a swipe-right approach to find your perfect match, embark on a stress-free journey to your ideal living space.
                </div>
                <Link to="https://github.com/Vaani-pathariya/Flatmate-backend"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default Flatify;