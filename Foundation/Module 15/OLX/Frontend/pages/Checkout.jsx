import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearCart } from "../features/cart/cartSlice";

import {
  checkoutProducts,
  resetCheckout
} from "../features/checkout/checkoutSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const { status, error, message } = useSelector(
    (state) => state.checkout
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Clear previous checkout messages when leaving
  useEffect(() => {
    return () => {
      dispatch(resetCheckout());
    };
  }, [dispatch]);

  // Clear cart after successful checkout
  useEffect(() => {
    if (status === "success") {
      dispatch(clearCart());
    }
  }, [status, dispatch]);

  const handleCheckout = () => {
    const productIds = cartItems.map(
      (item) => item._id
    );

    dispatch(checkoutProducts(productIds));
  };

  if (cartItems.length === 0 && status !== "success") {
    return (
      <div className="container">
        <p className="empty-message">
          Your cart is empty.
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="container">
        <div className="form-container">
          <h2 className="page-title">
            Purchase Successful!
          </h2>

          <p>{message}</p>

          <button
            className="primary-btn"
            style={{ marginTop: "20px" }}
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="page-title">Checkout</h2>

        <h3 style={{ marginBottom: "15px" }}>
          Order Summary
        </h3>

        {cartItems.map((item) => (
          <div
            key={item._id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px"
            }}
          >
            <span>
              {item.title} × {item.quantity}
            </span>

            <strong>
              ₹{(item.price * item.quantity).toLocaleString("en-IN")}
            </strong>
          </div>
        ))}

        <hr style={{ margin: "20px 0" }} />

        <h3 style={{ marginBottom: "20px" }}>
          Total: ₹{totalPrice.toLocaleString("en-IN")}
        </h3>

        {error && (
          <p className="error-text" style={{ marginBottom: "15px" }}>
            {error}
          </p>
        )}

        <button
          className="primary-btn"
          onClick={handleCheckout}
          disabled={status === "loading"}
        >
          {status === "loading"
            ? "Processing..."
            : "Confirm Purchase"}
        </button>
      </div>
    </div>
  );
}

export default Checkout;