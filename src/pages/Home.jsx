import React from "react";
import "./Home.css";
import pic from "../assets/myPic3.png";
import resume from '../assets/YugalResume.pdf'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
    const object = {
        name: "Hi I'm Yugal Kishore",
        hadding: "Frontend Developer based in India.",
        paragraph:
            "I'm a Frontend developer from Ghaziabad, India, and a fresher frontend developer. Currently, I’m undergoing comprehensive training in MERN Stack Development at Ducat India Institute, where I’m learning to build robust, dynamic, and scalable web applications.",
    };

    return (
        <section className="home">
            <div className="home-info">
                <h1>{object.name}</h1>
                <h2>{object.hadding}</h2>
                <p>{object.paragraph}</p>

                <div className="btn-sci">
                    <a href={resume} className="bttn" download>
                        Download CV
                    </a>
                    <div className="sci">
                        <a href="https://github.com/YugalKishore14" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/yugaldhiman" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <div className="home-img">
                <div className="img-box">
                    <div className="img-item">
                        <img src={pic} alt="Profile" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
