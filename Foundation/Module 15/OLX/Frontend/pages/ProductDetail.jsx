import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const items = useSelector(state => state.products.items);

  const product = items.find(item => item._id === id);

  if (!product) {
    return (
      <div className="container">
        <h2 className="page-title">Product Not Found</h2>
        <button
          className="primary-btn"
          onClick={() => navigate("/")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        Back to Products
      </button>

      <div className="product-detail">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="product-detail-image"
        />

        <div className="product-detail-info">
          <h2 className="page-title">{product.title}</h2>

          <p className="product-price">
            ₹{product.price}
          </p>

          <p className="product-category">
            {product.category}
          </p>

          <p className="product-description">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
