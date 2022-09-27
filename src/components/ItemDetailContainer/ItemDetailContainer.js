// import ItemDetail from '../ItemDetail/ItemDetail';
// import react, { useEffect, useState } from 'react';
// import data from '../ItemListContainer/mock-data';






// export const ItemDetailContainer = () => {
//     const [item, setItem] = useState ({});
// useEffect(() => {
//     const getData = new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve(data);
//         }, 3000);
//     });
//     getData.then(res => setItem(res));

// },[])



//     return(
//         <ItemDetail item={item}/>
//     );
// }





















import logo from '../../logo.svg';
import {db} from '../../utils/firebase'
import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {doc, getDoc} from "firebase/firestore";


const ItemDetailContainer =({ greeting }) =>{
    const [items, setItems] = useState ([]);

    
    const {detalleID} = useParams();


    // const getData =(id)=>{
    // return new Promise((resolve, reject) => {
       
    //     setTimeout(() =>{
    //         const producto = data.find(item=>item.id === parseInt(detalleID));
    //         resolve(producto);
    //         console.log(producto);
    //     }, 2000);
        
        
    // })};
   
    useEffect(()=>{
        const getProducto = async() =>{
         const queryRef = doc(db, "Items",detalleID);
        const response = await getDoc(queryRef);
       
       const newItem ={
        id: response.id,
        ...response.data(),
       }
       console.log(newItem);
       setItems(newItem)
        }
        getProducto();
    },[detalleID])


   

    return(
        <div>
            <ItemDetail items={items}></ItemDetail>
        </div>
    );
   
};



export default ItemDetailContainer;