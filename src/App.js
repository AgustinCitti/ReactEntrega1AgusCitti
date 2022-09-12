
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <header className="App-header">
        
        <h1>Cerveza Castelo</h1>
        <ItemListContainer />
        <ItemDetailContainer/>
      </header>
     
    </div>
  );
}

export default App;
