import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
export const Product = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {addToCart,cartItem}=useContext(ShopContext);
    const itemAmout=cartItem[id];
  return (
    <div className='product'>
        <img src={productImage}></img>
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>
          Add to Cart {itemAmout>0 && <>({itemAmout})</>}
          </button>
    </div>
  )
}
