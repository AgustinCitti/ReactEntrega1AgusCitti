import logo from '../../logo.svg'
//import ItemCount from '../ItemCount/ItemCount.jsx';
import data from './mock-data.js';
import {useState, useEffect} from "react";
import ItemList from '../ItemList/ItemList.js';

const ItemListContainer =({ greeting }) =>{
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


    return (
    <>
    { items.length > 0 ?(
        <ItemList itemsList={items}/>
    ) : (
        <img src={logo} className="App-logo" alt="logo" />
        )
        
    }
        
        </>);
};









/*
const itemListContainer = ({CervezasNombre,CervezaDescripcion}) => {
    const onAdd =(quantity) =>{
        console.log(`Compraste ${quantity} unidades`);
    }
    return(
       <div>
            <h3>{CervezasNombre}</h3>
          <p>{CervezaDescripcion}</p>
           <ItemCount initial={0} stock={24} onAdd={onAdd}/>
       </div>
        
    );
};*/


export default ItemListContainer;