import "./projectinfo.css";
import img from "../assets/aerofly.jpeg"
const ProjectInfo3=()=>{
    return (
        <div className="projectinfo">
            <img src={img} className="inner-img"/>
            <div className="pro-text">
            <h1>{"Aerofly"}</h1>
            <h2>{"Created a website that predicts whether a flight will be delayed or not based on the information about the flight that you input ."}</h2>
            <h2>Tech Stack :  React , Python , Scikit learn</h2>
            <a href="https://github.com/Vaani-pathariya/Aerofly"><button>See project ={'>'}</button></a>
            </div>
        </div>
    )
}
export default ProjectInfo3;