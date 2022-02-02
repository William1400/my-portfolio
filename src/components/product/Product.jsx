import React from 'react';
import "./Product.scss";
import Works from "../../img/works.png";

const Product = () => {
  
    return (
    
        <div className="product">
            <div className="product-browser">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>
            <a href="https://github.com/William1400?tab=repositories" target="_blank" rel="noreferrer">
                <img src={Works} alt="" className="product-img" />
            </a>
        </div>
    );
};

export default Product;
