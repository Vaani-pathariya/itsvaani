import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/p7.png"
const P6=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">DIALECT</div>
                <div className="below-textp new-font">Bridging Cultures, One Snapshot at a Time: DIALECT - Your Travel Companion.</div>
                <Link to="https://github.com/Vaani-pathariya/Dialect"><img src={test} className="project-img"></img></Link>
                <div className="below-textp new-font content">Introducing "DIALECT," a groundbreaking project designed to break down language barriers for travelers worldwide. Leveraging the power of Google Translate API and Speech API, DIALECT empowers users to capture content from foreign language boards and effortlessly converts it into their native tongue. Whether you're exploring a new city, decoding menus, or unraveling the secrets of local culture, DIALECT is your trusty travel companion. With a user-friendly React frontend, this innovative tool opens up a world of possibilities for seamless communication and cultural immersion. Join us on a journey where every picture truly tells a thousand words.</div>
                <Link to="https://github.com/Vaani-pathariya/Dialect"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default P6;