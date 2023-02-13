import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
// import { uiActions } from "./store/ui-slice";
import { sendCartData } from "./store/cart-slice";

let isIntial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.isShowCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    // const sendingData = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "Pending",
    //       title: "Sending...",
    //       message: "Sending cart data",
    //     })
    //   );

    //   const response = await fetch(
    //     "https://advance-redux-17b1e-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Sending cart data is Failed!");
    //   }

    //   // const responseData = await
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "success",
    //       title: "Sucess!",
    //       message: "Sending cart data successfully",
    //     })
    //   );
    // };

    // if (isIntial) {
    //   isIntial = false;
    //   return;
    // }

    // sendingData().catch((err) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "error",
    //       title: "Error!",
    //       message: "Sending cart data is failed!",
    //     })
    //   );
    // });

    if (isIntial) {
      isIntial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
