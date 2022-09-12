import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const Item =({id,name,description,price,image,stock})=>{
    return (
        <div>
            <img src={image} alt={name} height="300px"/>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
        </div>     
            
    );
};
export default Item;