import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  removeFromCart,
  updateQuantity
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(
    state => state.cart.items
  );

  // Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Increase or decrease quantity
  const handleQuantityChange = (id, quantity) => {
    dispatch(
      updateQuantity({
        id,
        quantity
      })
    );
  };

  // Remove product
  const handleRemove = id => {
    dispatch(removeFromCart(id));
  };

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h2 className="page-title">My Cart</h2>

        <div className="empty-message">
          Your cart is empty.
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="page-title">My Cart</h2>

      <div className="cart-list">
        {cartItems.map(item => (
          <div className="cart-item" key={item._id}>

            <img
              src={item.imageUrl}
              alt={item.title}
            />

            <div className="cart-item-details">
              <h3>{item.title}</h3>

              <p>₹{item.price}</p>

              <div className="quantity-controls">

                <button
                  onClick={() =>
                    handleQuantityChange(
                      item._id,
                      item.quantity - 1
                    )
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    handleQuantityChange(
                      item._id,
                      item.quantity + 1
                    )
                  }
                >
                  +
                </button>

              </div>

              <button
                className="remove-btn"
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </button>
            </div>

            <strong>
              ₹{item.price * item.quantity}
            </strong>

          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ₹{total}</h3>

        <button
          className="primary-btn"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;