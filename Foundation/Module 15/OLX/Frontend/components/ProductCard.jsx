import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const currentUser = useSelector(
    state => state.auth.user
  );

  // Get logged-in user ID
  const currentUserId =
    currentUser?._id || currentUser?.id;

  // Get product seller ID
  const sellerId =
    typeof product.sellerId === "object"
      ? product.sellerId?._id || product.sellerId?.id
      : product.sellerId;

  // Check whether the product belongs to current user
  const isOwnProduct =
    currentUserId &&
    sellerId &&
    String(currentUserId) === String(sellerId);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">

      <img
        src={product.imageUrl}
        alt={product.title}
        className="product-image"
      />

      <div className="product-details">

        <h3>{product.title}</h3>

        <p className="product-price">
          ₹{product.price}
        </p>

        <p className="product-category">
          {product.category}
        </p>

        <p className="product-description">
          {product.description}
        </p>

        {!isOwnProduct && (
          <button
            className="primary-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}

      </div>
    </div>
  );
}

export default ProductCard;