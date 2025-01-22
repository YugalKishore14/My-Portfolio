import React from "react";
import './About.css';


const Box = {
    description1: "Hi, I’m Yugal Kishor, a passionate Frontend Developer and MERN Stack Developer from Noida, Uttar Pradesh, India. With a strong foundation in web development and a keen eye for design, I specialize in creating responsive, user-friendly, and dynamic web applications.",
    description2: "I am currently a fresher in the industry but have honed my skills through hands-on projects and comprehensive training at DUCAT Institute. My technical expertise includes:",
    description3: "Apart from coding, I love exploring the latest technology trends and traveling to discover new places. My goal is to deliver impactful digital solutions that enhance user experiences and bring innovative ideas to life.",
    Frontend: <p><span>Frontend:</span> React.js, HTML, CSS, JavaScript</p>,
    Backend: <p><span>Backend:</span> Node.js, Express.js</p>,
    Database: <p><span>Database:</span> MongoDB</p>,
    Tools: <p><span>Tools & Platforms: </span>Git, VS Code, Postman</p>,
}

const About = () => {
    return (
        <>
            <div className="aboutMainBox">
                <div className="aboutBox">
                    <div className="aboutTextBox">
                        <p>{Box.description1}</p>
                        <p>{Box.description2}</p>
                        {Box.Frontend}
                        {Box.Backend}
                        {Box.Database}
                        {Box.Tools}
                        <p>{Box.description3}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
