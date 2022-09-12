
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nosotros from './components/Pages/Nosotros'
import CartWidget from "./components/NavBar/CartWidget";
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      
      <header className="App-header">
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/categoria' element={<ItemListContainer/>} />
        <Route path='/Nosotros' element={<Nosotros/>} />
        <Route path='/detalle/:detalleID' element={<ItemDetailContainer/>} />
      </Routes>
        {/* <ItemListContainer />
        <ItemDetailContainer/> */}
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
