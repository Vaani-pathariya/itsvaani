import "./projectinfo.css";
import img from "../assets/dialect.jpeg"
const ProjectInfo4=()=>{
    return (
        <div className="projectinfo">
            <img src={img} className="inner-img"/>
            <div className="pro-text">
            <h1>{"Therapy Pal"}</h1>
            <h2>{"Created a website that takes an image of text in any language and converts the text of the image into your desired language."}</h2>
            <h2>Tech Stack : React </h2>
            <a href="https://github.com/Vaani-pathariya/Dialect"><button>See project ={'>'}</button></a>
            </div>
        </div>
    )
}
export default ProjectInfo4;