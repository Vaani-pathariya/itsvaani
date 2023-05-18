import "./projectinfo.css";
import img from "../assets/amazon.jpg"
const ProjectInfo1=()=>{
    return (
        <div className="projectinfo">
            <img src={img} className="inner-img"/>
            <div className="pro-text">
            <h1>{"Amazon Clone"}</h1>
            <h2>{"I created a clone of the Amazon site , using the data retrieved from an API."}</h2>
            <h2>Tech Stack : MongoDb , React , NodeJs , ExpressJs</h2>
            <a href="https://github.com/Vaani-pathariya/amazon-clone"><button>See project ={'>'}</button></a>
            </div>
        </div>
    )
}
export default ProjectInfo1;