import React from 'react';
import "./Skills.scss";
import HTML from "../../img/Rectangle2.png";
import CSS from "../../img/Rectangle1.png";
import JS from "../../img/Rectangle3.png";
import SASS from "../../img/Rectangle4.png";
import NODE from "../../img/Rectangle9.png";
import PHP from "../../img/Rectangle7.png";
import SQL from "../../img/Rectangle6.png";
import REACT from "../../img/Rectangle8.png";
import WP from "../../img/Rectangle5.png";

const Skills = () => {

    return (

        <div className="skills">
            <div className="skills-left">
                <h1 className="skills-title">My skills</h1>
                <p className="skills-descritpions">
                    Here are all the technologies we have covered during our course. After having an in-depth course in JS, we went through all the other lagoons in order to find those that suit us best.
                    My affinity turns more towards the front-end and the React framework even if I intend to deepen in several teak
                </p>
                <div className="skills-titles-wrapper">
                            <div className="skills-title-item">Junior Web-Dev</div>
                            <div className="skills-title-item">Front-end</div>
                            <div className="skills-title-item">Self-taught</div>
                            <div className="skills-title-item">UI/UX Designer</div>
                            <div className="skills-title-item">Writer</div>
                        </div>
            </div>
            <div className="skills-right">
                <img src={HTML} alt="" className="skills-logo" />
                <img src={CSS} alt="" className="skills-logo" />
                <img src={JS} alt="" className="skills-logo" />
                <img src={SASS} alt="" className="skills-logo" />
                <img src={NODE} alt="" className="skills-logo" />
                <img src={PHP} alt="" className="skills-logo" />
                <img src={SQL} alt="" className="skills-logo" />
                <img src={REACT} alt="" className="skills-logo" />
                <img src={WP} alt="" className="skills-logo" />
            </div>
        </div>
    );
};

export default Skills;
