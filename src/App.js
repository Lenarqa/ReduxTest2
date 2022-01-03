import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Shop/Products';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
      <Products />
    </div>
  );
}

export default App;
