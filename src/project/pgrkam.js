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
                The objective is to enhance the analytics capabilities of the PGRKAM app by developing or integrating a tool similar to Mixpanel, Kissmetrics, or Google Analytics. The tool should capture specific details such as the channel where users saw PGKAM advertisements, user demographics, accessed webpages/services, and job suggestions based on matching requirements and skillsets. Additionally, the tool should provide collective analysis of user profile success/failure rates in relation to job requirements, using recommendation algorithms like Genetic Algorithm or Collaborative Filtering. The desired outcome is to track and analyze user movements and behaviors across the app and website, enabling timely reporting and insights for improving user experience. Better visualization tools should be employed to facilitate the analysis of user engagement, conversion, and retention in real-time across devices.</div>
                <Link to="https://github.com/Vaani-pathariya/PGRKAM-backend-public"><div className="new-font linking">Link to the project: HERE</div></Link>
            </div>
        </div>
    )
}
export default Pgrkam;