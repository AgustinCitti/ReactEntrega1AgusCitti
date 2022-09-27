import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { Link } from 'react-router-dom';
const Item =({item})=>{
    return (
        <div className="item">
            <img src={item.image} alt={item.name} height="300px"/>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <Link to={`/detalle/${item.id}`} ><button >Ver detalle</button></Link>
        </div>     
            
    );
};
export default Item;