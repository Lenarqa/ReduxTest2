import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCardData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reacthttplesson-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.status) {
        throw new Error("no card data in firebase");
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
      }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Senging",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const responce = await fetch(
        "https://reacthttplesson-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
              items: cart.items,
              totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!responce.status) {
        throw new Error("Send card data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sending cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
