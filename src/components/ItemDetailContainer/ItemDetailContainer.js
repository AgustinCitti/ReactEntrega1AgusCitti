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


    const getData =(id)=>{
    return new Promise((resolve, reject) => {
       
        setTimeout(() =>{
            const producto = data.find(item=>item.id === parseInt(detalleID));
            resolve(producto);
            console.log(producto);
        }, 2000);
        
        
    })};
    // getData.then(res => setItems(res.find(ItemList.id === parseInt(detalleID))));

    useEffect(()=>{
        const getProducto = async() =>{
            const producto = await getData();
            setItems(producto)

        }
        getProducto();
    },[detalleID])


    // useEffect(() =>{
        
    //     getData((result) => {
    //         setItems(result);
    //         console.log(result);
            
    //     })
    // }, []);


    return(
        <div>
            <ItemDetail items={items}></ItemDetail>
        </div>
    );
    // return (
    //     <>
    //     { items.length > 0 ?(
    //         <ItemDetail itemsList={items}/>
            
    //     ) : (
    //         <img src={logo} className="App-logo" alt="logo" />
    //         )
            
    //     }
            
    //         </>);
};






export default ItemDetailContainer;