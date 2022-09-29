
import iconoCaja from './iconoCaja.svg';
import './carritoStyle.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const CartWidget = () => {
    const {getTotalProducts} = useContext(CartContext);
    return(
        <div className="carrito1">
            <Link to="/cart">
            <img height={'55px'} width={'55px'}  src={iconoCaja}></img>
            <span style={{backgroundColor: '', borderRadius:"50%", width:"40px", heigth:"5px", fontSize:"30px", color:"black"}}>{getTotalProducts()}</span>
            </Link>
            </div>
    );
};

export default CartWidget;