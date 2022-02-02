import React from 'react';
import "./ProductList.scss";
import Product from "../product/Product";
import Works from "../../img/works.png";


const ProductList = () => {
    
    return (
        
        <div className="product-list">
            <div className="product-list-texts">
                <h1 className="product-list-title">My Works</h1>
                <p className="product-list-description">
                    Here you can see some examples of my work
                </p>
            </div>
            <div className="product-list-list">
                <Product img={Works} link="https://github.com/William1400?tab=repositories" />
    
            </div>
        </div>
    );
};

export default ProductList;
