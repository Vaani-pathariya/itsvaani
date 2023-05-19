import "./projects.css"
import Card from "./Card";
import { Link } from "react-router-dom";
import pro1 from "../assets/amazon.jpg"
import pro2 from "../assets/therapypal.jpg"
import pro3 from "../assets/aerofly.jpeg"
import pro4 from "../assets/dialect.jpeg"
const Projects = ()=>{
    return (
        <div className="Projects">
            <h1>PROJECTS</h1>
            <div className="mapped">
                <Link to="/project2"><Card img={pro2} heading="Therapy Pal" colour="#42ecf5" textColor="#426ff5" subtext="React, Flask, Kotlin, Machine Learning "/></Link>
                <Link to="/project1"><Card img={pro1} heading="Amazon Clone" colour="#f0e195" textColor="#e34020" subtext="React, Nodejs, MongoDb, Expressjs"/></Link>
                <Link to="/project3"><Card img={pro3} heading="Aerofly" colour="#f2eace" textColor="#a295f0" subtext="React, Nodejs ,Machine Learning "/></Link>
                <Link to="/project4"><Card img={pro4} heading="Dialect" colour="#f0cecc" textColor="#eb4034" subtext="React"/></Link>

            </div>
        </div>
    )
}
export default Projects;