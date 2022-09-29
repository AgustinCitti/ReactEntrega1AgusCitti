import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);
    
    const addItem = (item, quantity)=>{
        console.log("item", item, "quantity", quantity)
        const newProduct ={
            id: item.id,
            name: item.name,
            image: item.image,
            quantity:quantity
        }
        console.log("newProduct", newProduct);
        const newArreglo = [...productCartList];
        newArreglo.push(newProduct);
        setProductCartList(newArreglo);
    }
    const removeItem = (itemId)=>{
        console.log("itemId", itemId)
        const newArreglo = productCartList.filter(product=>product.id !== itemId);
        setProductCartList(newArreglo)
    }

    const getTotalPrice =() =>{
        const totalPrice = productCartList.reduce((acc, item)=>acc + item.quantityPrice,0);
        console.log(totalPrice);
        return totalPrice;
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc, item)=>acc + item.quantity,0);
        return totalProducts;
    }

    const clear = ()=>{
        setProductCartList([]);
    }

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, getTotalPrice, getTotalProducts, clear}}>
            {children}
        </CartContext.Provider>
    )
}