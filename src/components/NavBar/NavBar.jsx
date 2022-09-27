
import logo2 from './logo2.svg';
import './NavBar.css';
import CartWidget from './CartWidget.js';
import { NavLink } from 'react-router-dom';

const NavBar=() => {
    return(
 <div className="NavBar">
    <div >
        <ul className="listaNavBar">
             <li role="presentation" ><NavLink className="NavBarItemBrand" to='/' >CASTELO <img width={'30px'} src={logo2}/></NavLink></li>
            <li role="presentation" ><NavLink className="NavBarItem" to='/category/cervezaLiviana' >Cervezas Livianas</NavLink></li>
            <li role="presentation" ><NavLink className="NavBarItem" to='/category/cervezaFuerte' >Cervezas Fuertes</NavLink></li>
             <li role="presentation" ><NavLink className="NavBarItem" to='/Nosotros' >Nosotros</NavLink></li>
             
        </ul>
    </div>
    <CartWidget/>
</div>
    );
};
export default NavBar;