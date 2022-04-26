import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
function CheckoutProduct({id, title,image,price, rating}) {

    const [{basket,user} , dispatch] = useStateValue();
  const removeFromBasket =(basket) =>{
      dispatch({
        type : "REMOVE_FROM_BASKET",
        
          id:id,
        
      })
  }
  return (
    <div className="checkoutProduct">
        <img src={image} alt='' className="checkoutProduct__image"/>

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <small>{price}</small>
            </p>
            <div className="checkoutProduct__rating">
              {Array(rating)
              .fill()
              .map((_,i)=>(  <p>🌟</p>))}
              
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct