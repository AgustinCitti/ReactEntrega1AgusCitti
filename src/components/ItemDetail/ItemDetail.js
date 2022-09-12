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



const ItemDetail=({itemsList}) =>{
  return (
      <>
      {
      itemsList.map((producto)=>{
          return(
              <Item
               key={producto.id}
               name={producto.name}
               description={producto.description} 
               price={producto.price}
               image={producto.image}
              />
          );
      })}
      </> 
      )
  };
  










export default ItemDetail;