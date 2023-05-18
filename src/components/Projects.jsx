import "./projects.css"
import Card from "./Card";
import { Link } from "react-router-dom";
import pro1 from "../assets/amazon.jpg"
const Projects = ()=>{
    return (
        <div className="Projects">
            <h1>PROJECTS</h1>
            <div className="mapped">
                <Link to="/project1"><Card img={pro1} heading="Amazon Clone" colour="#de9f64" textColor="#e34020" subtext="React, Nodejs, MongoDb, Expressjs"/></Link>

            </div>
        </div>
    )
}
export default Projects;