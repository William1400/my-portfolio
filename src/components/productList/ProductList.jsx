import React from 'react';
import "./ProductList.scss";
import Product from "../product/Product";
import Works from "../../img/works.png";
import HTML from "../../img/Rectangle2.png";
import CSS from "../../img/Rectangle1.png";
import JS from "../../img/Rectangle3.png";
import SASS from "../../img/Rectangle4.png";
import NODE from "../../img/Rectangle9.png";
import PHP from "../../img/Rectangle7.png";
import SQL from "../../img/Rectangle6.png";
import REACT from "../../img/Rectangle8.png";


const ProductList = () => {

    return (

        <div className="product-skills">
            <div className="product-list">
                <div className="product-list-texts">
                    <h1 className="product-list-title">My Works</h1>
                    <p className="product-list-description">
                        You can see a sample of my works hereunder.
                    </p>
                </div>
                <div className="product-list-list">
                    <Product img={Works} link="https://github.com/William1400?tab=repositories" />
                </div>
            </div>
            <div className="skills">
                <h1 className="skills-description">My skills</h1>
                <p className="skills-subscribtion">
                    Here are all the technologies we have covered during our course.
                    Due to my affinity for this library, I chose to develop an in-depth expertise of React as a front-end developer.
                </p>
                <div className="skills-titles">
                    <div className="skills-slide">
                        <div className="skills-title-item">Stress management</div>
                        <div className="skills-title-item">Active listening</div>
                        <div className="skills-title-item">Calmness</div>
                        <div className="skills-title-item">Analysis</div>
                        <div className="skills-title-item">Idea exchange</div>
                        <div className="skills-title-item">Empathy</div>
                    </div>
                </div>
                <div className="skills-img">
                    <img src={HTML} alt="" className="skills-logo" />
                    <img src={CSS} alt="" className="skills-logo" />
                    <img src={JS} alt="" className="skills-logo" />
                    <img src={SASS} alt="" className="skills-logo" />
                    <img src={NODE} alt="" className="skills-logo" />
                    <img src={PHP} alt="" className="skills-logo" />
                    <img src={SQL} alt="" className="skills-logo" />
                    <img src={REACT} alt="" className="skills-logo" />
                    {/* <img src={WP} alt="" className="skills-logo" /> */}
                </div>
            </div>
        </div>

    );
};

export default ProductList;
