import React from "react";
import "./Projects.css";
import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";

const Projects = () => {
    return (
        <div className="mainBox">
            <a className="aBox" href="https://website-omega-seven-71.vercel.app/" target="_blank">
                <div className="forBox">
                    <img src={projectImage1} alt="image not found" />
                    <p>
                        <span>Rajan & Co. Web</span> presents a professional image with a clear focus on
                        essential financial services for both individuals and businesses,
                        ensuring improvement in their financial standing and regulatory
                        compliance.
                    </p>
                </div>
            </a>
            <a className="aBox" href="https://e-commerce-frontend-7fbr.onrender.com" target="_blank">
                <div className="forBox">
                    <img src={projectImage2} alt="image not found" />
                    <p>
                        <span>Ecommerce Web</span> This layout is designed to create an engaging shopping experience,
                        highlighting new trends while featuring a modern aesthetic.
                    </p>
                </div>
            </a>
            <a className="aBox" href="https://yugalkishore14.github.io/Weather-app/" target="_blank">
                <div className="forBox">
                    <img src={projectImage3} alt="image not found" />
                    <p>
                        <span>WeatherApp</span> This project likely aims to provide users with a simple, clear
                        interface for checking current weather conditions, along with
                        essential details like temperature, humidity, and wind speed.
                    </p>
                </div>
            </a>
            <a className="aBox" href="https://yugalkishore14.github.io/calculator/" target="_blank">
                <div className="forBox">
                    <img src={projectImage4} alt="image not found" />
                    <p>
                        <span>Calculator</span> The calculator is designed for straightforward arithmetic operations,
                        providing a user-friendly experience with quick access to essential
                        functions.
                    </p>
                </div>
            </a>
        </div>
    );
};

export default Projects;
