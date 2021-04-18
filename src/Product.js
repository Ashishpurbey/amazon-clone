import React from 'react'
import './Product.css'
import ReactStars from "react-rating-stars-component";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';


function Product({id,title,image,price,rating}) {
    //pull data from the data layer(maybe)
    const [{basket},dispatch] = useStateValue();
     
    console.log('this is my basket',basket);
    const addToBasket = ()=>{
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                <ReactStars
                   count={5}
                    size={20}
                    value={rating}
                    edit={false}
                    activeColor="#ffd700"
                />
                    
                </div>
            </div>
            <img src={image} alt="not loaded"/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
