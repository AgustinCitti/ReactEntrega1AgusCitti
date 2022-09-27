import Item from "../Item/Item";
import { NavLink } from 'react-router-dom';
export const ItemList = ({items})=>{

    return(
        <div>
            <div style={{width:"100%"}}>item list</div>
            {
                items.map(producto=>(
                    <Item key={producto.id} item={producto}/>
                ))
            }
        </div>
    )
}


    

export default ItemList