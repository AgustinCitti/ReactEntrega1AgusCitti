import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { Link } from 'react-router-dom';
const Item =({producto})=>{
    return (
        <div className="item">
            <img src={producto.image} alt={producto.name} height="300px"/>
            <h1>{producto.name}</h1>
            <p>{producto.description}</p>
            <p>{producto.price}</p>
            <Link to={`/detalle/${producto.id}`} ><button >Ver detalle</button></Link>
        </div>     
            
    );
};
export default Item;