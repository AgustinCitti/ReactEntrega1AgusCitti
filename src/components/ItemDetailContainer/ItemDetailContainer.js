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

import data from '../ItemListContainer/mock-data';
import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer =({ greeting }) =>{
    const [items, setItems] = useState ([]);

    const getData = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data);
        }, 2000);
    });


    useEffect(() =>{
        getData.then((result) => {
            setItems(result);
            console.log(result);
        })
    }, []);
    return(
        <ItemDetail itemsList={items}/>
      );
};









export default ItemDetailContainer;