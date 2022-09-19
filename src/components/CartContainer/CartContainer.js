import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartContainer= () => {
    const {productCartList, removeItem} = useContext(CartContext);

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
        </div>
    )
}
 export default CartContainer;