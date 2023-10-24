import React from "react";
//Code Is Poetry, and I'm the Wordsmith
import vaani from "../assets/vaani_2image (1).jpg"
import "../css/landing.css"
const About=()=>{
    return (
        <div className="about">
            <div className="sizing">
                <div className="new-font above-text bold">Hey! I am Vaani Pathariya</div>
                <div className="changed-font siz">Code Is Poetry and I am the Wordsmith</div>
            </div>
            <div className="flex">
                <div>
                    <img src={vaani} className="my-pic"></img>
                </div>
                <div className="simple about-me">
                    <div className="bigger">A FEW WORDS ABOUT ME</div>
                    <div className="less-wide">I'm a passionate pre-final year computer science student with a deep love for technology and innovation. My expertise spans full-stack web development, machine learning, and data structures, with a mastery of languages like Python and C++. I'm also an active contributor to open source projects, sharing my technical insights and experiences. With a strong foundation in problem-solving I'm excited to continue exploring the ever-evolving world of technology and making a positive impact.<br></br>
As a top 30 winner of Samsung Solve for Tomorrow and the 2nd runner-up at Trident Hacks Nationals '23, I've honed my skills in both individual and team settings. Currently serving as a web developer at GDSC JSSATEN and Microsoft Learn Student Ambassador, I am looking for SDE Intern positions and I'm deeply committed to empowering others through technology education. Let's connect and explore opportunities to collaborate or discuss our shared passion for technology and innovation!
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;