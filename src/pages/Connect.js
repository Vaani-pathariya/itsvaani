import React from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import arrow from "../assets/icons8-down-arrow-100.png"
import leetcode from "../assets/leetcode.svg"
import github from "../assets/github.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
const Connect=()=>{
    return (
        <div className="connect-tab" id="connect">
            <div className="simple-black-connect">READY TO TRANSFORM YOUR BUISNESS ?</div>
            <img src={arrow}></img>
            <div className="changed-font-black sizo">Lets connect and work together</div>
            <Link to ="mailto:vaanipathariya@gmail.com"><div className="email">vaanipathariya@gmail.com</div></Link>
            <div className="flex images">
            <Link to="https://github.com/Vaani-pathariya"><img src={github} className="image_di"></img></Link>
            <Link to="https://www.linkedin.com/in/vaani-pathariya/"><img src={linkedin} className="image_di"></img></Link>
            <Link to="https://leetcode.com/vaanipathariya/"><img src={leetcode} className="image_di"></img></Link>
            <Link to="https://twitter.com/PathariyaVaani"><img src={twitter} className="image_di"></img></Link>
            </div>
        </div>
    )
}
export default Connect;