
import logo2 from './logo2.svg';
import './NavBar.css';
import CartWidget from './CartWidget.js';


const NavBar=() => {
    return(
 <div className="NavBar">
    <div >
        <ul className="listaNavBar">
             <li role="presentation" ><a className="NavBarItemBrand" href="#">CASTELO <img width={'30px'} src={logo2}/></a></li>
            <li role="presentation" ><a className="NavBarItem" href="#">Nosotros</a></li>
             <li role="presentation" ><a className="NavBarItem" href="#">Contactanos</a></li>
             
        </ul>
    </div>
    <CartWidget/>
</div>
    );
};
export default NavBar;