import './App.css';

import Header from './components/Header/Header';
import Products from './components/Shop/Products';
import Cart from './components/Cart/Cart';

import { useSelector } from 'react-redux';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  
  return (
    <div className="App">
      <Header />
      {showCart && <Cart />}
      <Products />
    </div>
  );
}

export default App;
