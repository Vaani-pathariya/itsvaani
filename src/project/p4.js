import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/p4.png"
const P4=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">AMAZON CLONE</div>
                <div className="below-textp new-font">Your Prime Choice: A Clone of Convenience</div>
                <img src={test} className="project-img"></img>
                <div className="below-textp new-font content">Introducing our remarkable project, a meticulously crafted clone of the renowned Amazon site. Welcome to "Your Prime Choice," a platform that mirrors the convenience, variety, and user-friendly experience that Amazon offers. Our goal is to provide users with an authentic and familiar shopping experience, ensuring that they can find their favorite products and discover new ones with ease. With a focus on delivering exceptional user satisfaction, we've recreated the magic of Amazon for your convenience. Explore, shop, and enjoy the seamless experience at "Amazon" today.</div>
                <Link to="https://github.com/Vaani-pathariya/amazon-clone"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default P4;