import React  from "react";
import { Link } from "react-router-dom";
import "../css/landing.css"
import Navbar from "../components/Navbar";
import test from "../assets/pgrkam.png"
const Pgrkam=()=>{
    return (
        <div className="project">
            <Navbar/>
            <div className="sizing">
                <div className="changed-font sizP">PGRKAM</div>
                <div className="below-textp new-font">Created analytics tool for the PGRKAM website ,used by Punjab Government</div>
                <img src={test} className="project-img"></img>
                <div className="below-textp new-font content">Leveling up the analytics for jobs on the platform<br></br>
                It is desired that an analytics tool similar to Mixpanel/Kissmetrics/Google Analytics be developed/integrated to the PGRKAM app to enable the administrators to track the users’ behavior and actions. It is desired that the following details be captured by the tool: 1. Channel where the user spotted the PGKAM advertisement. 2. Demographics of users. 3. Webpage/service accessed/information consumed by the users. 4. Job suggestions based on a potential match in job requirements and skillsets of registered users 5. Collective analysis of success/ failure rate of the user profile with respect to job requirements for better future suggestions along with job recommendations using algorithms like Genetic Algorithm or Collaborative Filtering or any other recommendation algorithm The details are expected to be displayed using better visualization tools to enable the teams to analyze how and why people engage, convert, and retain—in real-time, across devices—to improve their user experience. Expected Outcome User movement and user behavior should be successfully tracked across the PGRKAM app and website for timely reporting and analytics pertaining to user profile, behavior, and experience</div>
                <Link to="https://github.com/Vaani-pathariya/PGRKAM-backend-public"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default Pgrkam;