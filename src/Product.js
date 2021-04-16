import React from 'react'
import './Product.css'
import ReactStars from "react-rating-stars-component";

function Product({title,image,price,rating}) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_raing">
                <ReactStars
                   count={5}
                    size={20}
                    value={rating}
                    activeColor="#ffd700"
                />
                    
                </div>
            </div>
            <img src={image} alt="not loaded"/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
