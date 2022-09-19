// import data from '../ItemListContainer/mock-data';
// import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
// import Item  from '../Item/Item'

// export const ItemDetail = ({ItemDetail}) => {
//     return (
//           <div className="container">
//             <div className="detail">
//                 <img className='detail__image' src={Item.image} alt=""/>
//                 <div className="content">
//                     <h1>{Item.title}</h1>
//                 </div>
//             </div>
//           </div>
          
//         );
        
// }
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount.jsx"
import {useState, useContext} from "react";
import {CartContext} from "../../context/CartContext";

const ItemDetail=({items}) =>{
    const {addItem} = useContext(CartContext);
    const [compra,setCompra]= useState(0);
    
    
    const onAdd =(quantity) =>{
        setCompra(quantity);
        console.log(`Compraste ${quantity} unidades`);
        addItem(items, quantity);
    };
  return (
    <div>
        <h1>{items.name }</h1>
        <img height="500px" src={items.image} alt={items.name}></img>
        <p>{items.description}</p>
        <p>Pedido:{compra}</p>
        <ItemCount initial={0} stock={24} onAdd={onAdd}></ItemCount>
    </div>








    //   <>
    //   {
    //   itemsList.map((producto)=>{
    //       return(
    //           <Item
    //            key={producto.id}
    //            name={producto.name}
    //            description={producto.description} 
    //            price={producto.price}
    //            image={producto.image}
    //           />
    //       );
    //   })}
    //   </> 
      )
  };
  










export default ItemDetail;