import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/p3.png"
const P8=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">HOLA</div>
                <div className="below-textp new-font">Connecting Generations, Building Futures: Hola - Your JSS Alumni Network</div>
                <img src={test} className="project-img"></img>
                <div className="below-textp new-font content">Introducing "Hola," the bridge that unites the past and the present at JSS College. This dynamic project, meticulously crafted with React, MongoDB, Express, and Node.js, serves as a digital hub where current students and cherished alumni come together. <br></br>

On Hola, users can interact with ease, express their appreciation through likes and comments, and share their journey through a shared feed. It's more than just a platform; it's a living connection to the legacy of our institution. Join us in celebrating the bonds of academia, fostering mentorship, and building a future that's shaped by the wisdom and experience of our esteemed alumni. Welcome to Hola, your gateway to a vibrant college community that stands the test of time.</div>
                <Link to="https://github.com/Vaani-pathariya/Hola"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default P8;