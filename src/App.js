import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <ItemListContainer greeting='promociones hasta 50%' />
      </header>
    </div>
  );
}

export default App;
