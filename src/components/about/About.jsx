import React from 'react';
import "../about/About.scss";
import Group from "../../img/about.png";
import Hack from "../../img/Hackathon.png";
import Cv from "../../media/curriculum.pdf";

const About = () => {

    return (

        <div className="about">
            <div className="about-left">
                <div className="about-card background"></div>
                <div className="about-card">
                    <img src={Group} alt="photo" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-subscribtion">
                    ``Don't pray for an easy life, pray for strength to endure a hard one.`` B.L
                </p>
                <p className="about-description">
                     A former cook in professional retraining, I decided to develop my passion for IT and development that kept on growing as the pandemic paved the way for me.
                    I have always worked in a team and so I naturally made the choice of an active pedagogy to start learning code.
                    My new professional goal is to continue to evolve in a fulfilling environment.
                </p>
                <button className="button">
                    <a href={Cv} download>My curriculum</a>
                </button>
                <div className="about-award">
                    <img src={Hack} alt="" className="about-award-img" />
                    <div className="about-award-texts">
                        <h4 className="about-award-title">My first challenge</h4>
                        <p className="about-award-description">
                        After just three months of training, I took up the challenge of Hackathon.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;
