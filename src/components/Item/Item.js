import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { Link } from 'react-router-dom';
const Item =({id,name,description,price,image,stock})=>{
    return (
        <div className="item">
            <img src={image} alt={name} height="300px"/>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <button ><Link to={`/detalle/${id}`} >Ver detalle</Link></button>
        </div>     
            
    );
};
export default Item;