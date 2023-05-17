import "./landing.css" ;
import logo from "../assets/logo.png"
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import blog from "../assets/blog.png"
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Projects from "./Projects";
const Landing=()=>{
    return(
        <>
        <div className="landing">
            <nav>
                <div className="nav-logo">
                <img src={logo}></img>
                <h1>ITSVAANI</h1>
                </div>
                <div>
                    <ul className="nav-ul">
                        <li className="nav-text">HOME</li>
                        <li className="nav-text">SKILLS</li>
                        <li className="nav-text">PROJECTS</li>
                        <li><img src={github} className="contact"></img></li>
                        <li><img src={linkedin} className="contact"></img></li>
                        <li><img src={twitter} className="contact"></img></li>
                        <li><img src={blog} className="contact"></img></li>
                    </ul>
                </div>
            </nav>
            <Portfolio/>
        </div>
        < div className="skills-back">
            <Skills />
        </div>
        <Projects/>
        </>
    )
}
export default Landing;