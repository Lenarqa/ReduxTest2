import "./App.css";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendCartData, fetchCardData } from "./store/cart-actions";

import Header from "./components/Header/Header";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";
import Notification from "./components/UI/Notification";



let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(()=> {
    dispatch(fetchCardData());
  }, [dispatch]);

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <div className="App">
        <Header />
        {showCart && <Cart />}
        <Products />
      </div>
    </Fragment>
  );
}

export default App;
