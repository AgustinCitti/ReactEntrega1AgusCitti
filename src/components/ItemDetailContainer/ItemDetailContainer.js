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
import data from '../ItemListContainer/mock-data';
import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
const ItemDetailContainer =({ greeting }) =>{
    const [items, setItems] = useState ([]);
    const {detalleID} = useParams();
    const getData = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data);
        }, 2000);
        getData.then(res => setItems(res.find(ItemList.id === parseInt(detalleID))));
    });


    useEffect(() =>{
        getData.then((result) => {
            setItems(result);
            console.log(result);
        })
    }, []);
    return (
        <>
        { items.length > 0 ?(
            <ItemDetail itemsList={items}/>
            
        ) : (
            <img src={logo} className="App-logo" alt="logo" />
            )
            
        }
            
            </>);
};









export default ItemDetailContainer;