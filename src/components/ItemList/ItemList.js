import Item from "../Item/Item";
import { NavLink } from 'react-router-dom';
const ItemList=({itemsList}) =>{
    return (
        <>
        {
        itemsList.map((producto)=>{
            return(
                <Item
                producto={producto}
                 key={producto.id}
                 name={producto.name}
                 price={producto.price}
                 image={producto.image}
                />
            );
        })}
        </> 
        )
    };
    

export default ItemList