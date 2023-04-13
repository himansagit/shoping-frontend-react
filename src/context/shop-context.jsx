import React, {createContext, useState} from 'react'
import { PRODUCTS } from '../products';
export const ShopContext=createContext(null); 

const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<=PRODUCTS.length;i++){
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItem,setCartItems]=useState(getDefaultCart());

    const getTotalAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo=PRODUCTS.find((product)=> product.id===Number(item));
                totalAmount+=(cartItem[item]*itemInfo.price);
            }
        }
        return totalAmount;
    }
    const addToCart=(itemId)=>{
        setCartItems((state)=>({...state,[itemId]:state[itemId]+1}));

    }

    const removeToCart=(itemId)=>{
        setCartItems((state)=>({...state,[itemId]:state[itemId]- 1}));
    }
    const updateCartAmount=(newAmount,itemId)=>{
        setCartItems((state)=>({...state,[itemId]:newAmount}));
    }
    const contextValue={cartItem,addToCart,removeToCart,updateCartAmount,getTotalAmount};
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
