
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nosotros from './components/Pages/Nosotros'
import CartContainer from "./components/CartContainer/CartContainer";
import {ThemeContext} from "./context/ThemeContext";
import {CartProvider} from "./context/CartContext";

function App() {
  return (
    
    <div className="App">
      <CartProvider>
     
      <BrowserRouter>
      <NavBar/>
      
      <header className="App-header">
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/Nosotros' element={<Nosotros/>} />
        <Route path='/detalle/:detalleID' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartContainer/>}/>
      </Routes>
      </header>
      </BrowserRouter>
      
      </CartProvider>
    </div>
  );
}

export default App;
