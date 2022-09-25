import {db} from "../../utils/firebase";
import {doc, getDoc, collection, getDocs, query, where, limit} from "firebase/firestore";
import React, {useContext, useEffect} from 'react';



 const Nosotros = () => {
    
// useEffect(()=>{
//  const getData = async()=>{
// //creamos la referencia
//     const query = doc(db, "Items", "4ihnjsDNd2UTalSH23xN");
//     //solicitud
//     const response = await getDoc(query);
//     console.log("response", response.id);
//     console.log("data", response.data());
//     const newProduct = {
//         ...response.data(),
//         id: response.id
//     }
//     console.log(newProduct);
//  }
//  getData();   
// },[])

// useEffect(()=>{
//     const getData = async()=>{
//    //creamos la referencia
//       const query = collection(db, "Items");
//        //solicitud
//         const response = await getDocs(query);
//         console.log(response);
//         const productos = response.docs.map(doc =>{
//             const newProduct = {
//              ...doc.data(),
//               id: doc.id
//               }
//               return newProduct
//         })
//         console.log(productos);
//     }
//     getData();   
//    },[])




useEffect(()=>{
    const getData = async()=>{
   //creamos la referencia
      const queryRef = query(collection(db,"Items"),where("category", "==","cervezaLiviana"),limit(1));
       //solicitud
        const response = await getDocs(queryRef);
        console.log(response);
        const productos = response.docs.map(doc =>{
            const newProduct = {
             ...doc.data(),
              id: doc.id
              }
              return newProduct
        })
        console.log(productos);
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