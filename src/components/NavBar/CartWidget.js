
import iconoCaja from './iconoCaja.svg';
import './carritoStyle.css';
import {Link} from 'react-router-dom';
const CartWidget = () => {
    return(
        <div className="carrito1">
            <Link to="/cart">
            <img height={'55px'} width={'55px'}  src={iconoCaja}></img>
            </Link>
            </div>
    );
};

export default CartWidget;