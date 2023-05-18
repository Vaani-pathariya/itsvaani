import "./landing.css" ;
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Projects from "./Projects";
import { HashLink } from "react-router-hash-link";
import Contact from "./Contact";
const Landing=()=>{
    return(
        <>
        <div className="landing" id="home">
            <nav>
                <ul>
                    <li><HashLink to="#home">Home</HashLink></li>
                    <li><HashLink to="#skills">Skills</HashLink></li>
                    <li><HashLink to="#projects">Projects</HashLink></li>
                    <li><HashLink to="#contact">Contact</HashLink></li>
                </ul>
            </nav>
            <Portfolio/>
        </div>
        < div className="skills-back" id="skills">
            <h1>SKILLS</h1>
            <Skills />
        </div>
        <div id="projects">
        <Projects />
        </div>
        <div id="contact">
        <Contact />
        </div>
        
        </>
    )
}
export default Landing;