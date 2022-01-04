import "./App.css";

import Header from "./components/Header/Header";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";
import { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const fetchCarts = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Senging",
          message: "Sending cart data",
        })
      );

      const responce = await fetch(
        "https://reacthttplesson-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!responce.status) {
        throw new Error("Send card data failed");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sending cart data successfully",
        })
      );
    };

    if(isInitial) {
      isInitial = false;
      return;
    }

    fetchCarts().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    });
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
