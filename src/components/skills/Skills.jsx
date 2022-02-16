import React from 'react';
import "./Skills.scss";
import Html from "../../img/Rectangle2.png";
import Css from "../../img/Rectangle1.png";
import Js from "../../img/Rectangle3.png";
import Sass from "../../img/Rectangle4.png";
import Node from "../../img/Rectangle9.png";
import Php from "../../img/Rectangle7.png";
import Sql from "../../img/Rectangle6.png";
import ReactV from "../../img/Rectangle8.png";
import Wp from "../../img/Rectangle5.png";

const Skills = () => {

    return (

        <div className="skills">
            <div className="skills-left">
                <h1 className="skills-description">My skills</h1> 
                <div className="skills-titles">
                    <div className="skills-slide-left">
                        <div className="skills-title-item">Stress management</div>
                        <div className="skills-title-item">Active listening</div>
                        <div className="skills-title-item">Calmness</div>
                        <div className="skills-title-item">Analysis</div>
                        <div className="skills-title-item">Idea exchange</div>
                        <div className="skills-title-item">Empathy</div>
                    </div>
                    </div>
                <p className="skills-subscribtion">
                    Here are all the technologies we have covered during our course.
                    Due to my affinity for this library, I chose to develop an in-depth expertise of React as a front-end developer.
                </p>
            </div>
            <div className="skills-right">
                <div className="skills-right-img">
                    <img src={Html} alt="" className="skills-logo" />
                    <img src={Css} alt="" className="skills-logo" />
                    <img src={Js} alt="" className="skills-logo" />
                    <img src={Sass} alt="" className="skills-logo" />
                    <img src={Node} alt="" className="skills-logo" />
                    <img src={Php} alt="" className="skills-logo" />
                    <img src={Sql} alt="" className="skills-logo" />
                    <img src={ReactV} alt="" className="skills-logo" />
                    <img src={Wp} alt="" className="skills-logo" />
                </div>
            </div>
        </div>
    );
};

export default Skills;
