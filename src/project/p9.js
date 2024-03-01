import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/p9.png"
const P9=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">SCAM SHIELD</div>
                <div className="below-textp new-font">Guarding Your Cyber Frontiers: Scam Shield - Your Link Integrity Defender</div>
                <Link to="https://github.com/Vaani-pathariya/kavach"><img src={test} className="project-img"></img></Link>
                <div className="below-textp new-font content">Introducing "Scam Shield," your vigilant guardian in the digital realm. Crafted with the power of React, machine learning, and the Scikit-learn library, this innovative project is designed to ensure your online safety.<br></br>

Scam Shield empowers you to submit links, which are then meticulously scanned and assessed for potential piracy or fraudulent content. In a world where cyber threats are ever-present, our platform acts as your digital shield, offering you peace of mind and security. Whether you're a cautious internet user or an organization safeguarding your online presence, Scam Shield is your indispensable companion in the battle against cyber scams. Welcome to a safer and more secure online experience with Scam Shield.</div>
                <Link to="https://github.com/Vaani-pathariya/kavach"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default P9;