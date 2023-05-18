import { useState } from "react";
import "./card.css"

const Card=(props)=>{
    const [display,setDisplay]=useState(true);
    const MouseOver=()=>{
        setDisplay(false);
    }
    const MouseOut=()=>{
        setDisplay(true);
        console.log("out")
    }
    return (
        <div className="Card" onMouseOver={MouseOver} onMouseOut={MouseOut}>
            {display &&<img src={props.img} />}
            {!display&&
            <div className="absence" style={{backgroundColor: props.colour}}>
                <h1 style={{color : props.textColor}}>{props.heading}</h1>
                <h2 style={{color : props.textColor}}>{props.subtext}</h2>
            </div>}
        </div>
    )
}
export default Card;