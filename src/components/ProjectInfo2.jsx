import "./projectinfo.css";
import img from "../assets/therapypal.jpg"
const ProjectInfo2=()=>{
    return (
        <div className="projectinfo">
            <img src={img} className="inner-img"/>
            <div className="pro-text">
            <h1>{"Therapy Pal"}</h1>
            <h2>{"Go to applications for therapists and patients to take quizzes and identify whether the patient is suffering from Postpartum Depression , OCD and ADHD"}</h2>
            <h2>Tech Stack : React, Flask, Kotlin, Machine Learning</h2>
            <a href="https://github.com/Vaani-pathariya/Trident"><button>See project ={'>'}</button></a>
            </div>
        </div>
    )
}
export default ProjectInfo2;