import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {addDoc, collection, getFirestore} from 'firebase/firestore'
export const CartContainer= () => {
    const {productCartList, removeItem, getTotalPrice, clear} = useContext(CartContext);

        const order = {
            buyer: {
                 names:"Tobi",
                 phone:"12345678",
                 email:"tobimartinez@gmail.com" , 
                Items: productCartList, 
                total: getTotalPrice()}
            };
            console.log("order", order);

            const handleClick =()=>{
                const db=getFirestore();
                const ordersCollection =collection(db, 'orders');
                addDoc(ordersCollection, order)
                .then(({id})=> console.log(id));
                clear();
                console.log("orden enviada");
            }

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
              <button onClick={handleClick}>Finalizar compra</button>
        </div>
    )
}
 export default CartContainer;