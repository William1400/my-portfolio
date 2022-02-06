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
    );
};

export default ProductList;
