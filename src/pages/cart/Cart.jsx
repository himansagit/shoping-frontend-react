import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './CartItem';
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const {cartItem,getTotalAmount}=useContext(ShopContext);
  const navigator=useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
            if(cartItem[product.id]!==0){
             return <CartItem data={product}/>
            }
        })}
      </div>
      {getTotalAmount()>0?
      <div className="checkout">
        <p>Subtotal:  ${getTotalAmount()}</p>
        <button onClick={()=> navigator("/")}>Contnue Shoping</button>
        <button > Checkout </button>
      </div>
      :
      <h1>Your Cart is Empty</h1>
      }
    </div>
  )
}
