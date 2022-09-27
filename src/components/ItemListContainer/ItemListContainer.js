import logo from '../../logo.svg'
//import ItemCount from '../ItemCount/ItemCount.jsx';
import data from './mock-data.js';
import {useState, useEffect} from "react";
import ItemList from '../ItemList/ItemList.js';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import {db} from "../../utils/firebase";
import {doc, getDoc, collection, getDocs, query, where, limit, getFirestore} from "firebase/firestore";

    const ItemListContainer = ({ greeting }) => {
    const {categoryId} = useParams();
    console.log('categoryId', categoryId)
    const [productos, setProductos] = useState([]);
    
    useEffect(()=>{
        const queryRef = collection(db, "Items");
        getDocs(queryRef).then(response=>{
            const resultados = response.docs.map(doc=>{
                const newItem ={
                    id:doc.id,
                    ...doc.data(),
                }
                return newItem;
            });
            console.log(resultados)
            setProductos(resultados);
        })
    },[categoryId])

    return(
        <div>
            <p>item list container</p>
            <ItemList items={productos}/>
        </div>
    )
 };

export default ItemListContainer;