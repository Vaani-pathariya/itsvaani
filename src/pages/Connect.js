import React from "react";
import "../css/landing.css"
import arrow from "../assets/icons8-down-arrow-100.png"
const Connect=()=>{
    return (
        <div className="connect-tab">
            <div className="simple-black-connect">READY TO TRANSFORM YOUR BUISNESS ?</div>
            <img src={arrow}></img>
            <div className="changed-font-black sizo">Lets connect and work together</div>
        </div>
    )
}
export default Connect;