import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();



export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);
    const isInCart = (productId) =>{
        const productExist = productCartList.some(item=>item.id == productId)
        return productExist;
    }
    const addItem = (item, quantity)=>{
        console.log("item", item, "quantity", quantity)
        const newProduct ={
            id: item.id,
            name: item.name,
            image: item.image,
            quantity:quantity
        }
        if(isInCart(item.id)){
            const productPos = productCartList.findIndex(product => product.id === item.id);
            const newArreglo = [...productCartList];
            newArreglo[productPos].quantity =  newArreglo[productPos].quantity + quantity;
            newArreglo[productPos].quantityPrice = newArreglo[productPos].quantity * newArreglo[productPos].precio;
            setProductCartList(newArreglo);
        } else{
            const newArreglo = [...productCartList];     
            newProduct.quantityPrice = newProduct.quantity * newProduct.precio;
            newArreglo.push(newProduct);
            setProductCartList(newArreglo)
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

    const getTotalPrice = () =>{
        const totalPrice = productCartList.reduce((acc, item)=> acc + item.quantityPrice,0);
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
        <CartContext.Provider value={{productCartList, addItem, removeItem, getTotalPrice, getTotalProducts, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}