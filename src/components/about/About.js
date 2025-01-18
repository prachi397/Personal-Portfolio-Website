import React from "react";
import './about.css';

const skills = ["React JS", "JavaScript", "Redux", "HTML/CSS", "Bootstrap", "Material UI", "GIT"];

const About = () =>{
    return (
        <div className="aboutPage" id="about">
            <section>
                <h3>Education : </h3>
                <p>B.Tech in Information Technology from College of Engineering Roorkee</p>
            </section>
            <section>
                <h3>Work Experience : </h3>
                <p>Software Engineer at HCL Tech (Aug-2022 - Jul 2024)</p>
            </section>
            <section>
                <h3>Skills : </h3>
                {skills.map((ele,idx)=>(
                    <p key={idx} className="skill">{ele}</p>
                ))}
            </section>
        </div>
    )
}
export default About;