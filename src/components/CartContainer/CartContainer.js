import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartContainer= () => {
    const {productCartList, removeItem, getTotalPrice, clear} = useContext(CartContext);

        const order = {
            buyer: {
                 names:"Tobi",
                 phone:"12345678",
                 email:"tobimartinez@gmail.com" }, 
                Items: productCartList, 
                total:getTotalPrice()
            };
            console.log("order", order)



    return(
        <div>
            CartContainer
            <div>
                {productCartList.map(item=>(
                    <>
                    <p>{item.name} - {item.quantity}</p>
                    <button onClick={()=>removeItem(item.id)}>eliminar del pedido</button>
                    </>
                    
                ))}
            </div>
            <button onClick={clear}>Vaciar el carrito</button>
              <p>Precio total: {getTotalPrice()}</p>
        </div>
    )
}
 export default CartContainer;