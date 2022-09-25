import {db} from "../../utils/firebase";
import {doc, getDoc} from "firebase/firestore";
import React, {useContext, useEffect} from 'react';
 const Nosotros = () => {
useEffect(()=>{
 const getData = async()=>{
//creamos la referencia
    const query = doc(db, "Items", "4ihnjsDNd2UTalSH23xN");
    //solicitud
    const response = await getDoc(query);
    console.log("response", response);
 }
 getData();   
},[])



    return (
        <div>
            <h1>Nuestra Historia</h1>
            <p>Texto 1</p>
            <p>Texto 2</p>
        </div>     
            
    );
};
export default Nosotros;