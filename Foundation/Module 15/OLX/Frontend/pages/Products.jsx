
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { fetchProducts } from "../features/products/productSlice";
import ProductCard from "../components/ProductCard";

const categories = [
  { label: "All Products", value: "All Products" },
  { label: "Fashion", value: "Fashion" },
  { label: "Electronics", value: "Electronic" },
  { label: "Vehicles", value: "Vehicles" },
  { label: "Furniture", value: "Furniture" }
];

function Products() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    items,
    productsLoading,
    productsError
  } = useSelector(state => state.products);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Products");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const successMessage = location.state?.successMessage;

  // Fetch all products initially
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Apply category and price filters
  const handleFilter = event => {
    event.preventDefault();

    const filters = {};

    if (category !== "All Products") {
      filters.category = category;
    }

    if (minPrice !== "") {
      filters.minPrice = minPrice;
    }

    if (maxPrice !== "") {
      filters.maxPrice = maxPrice;
    }

    dispatch(fetchProducts(filters));
  };

  // Reset filters
  const handleReset = () => {
    setCategory("All Products");
    setMinPrice("");
    setMaxPrice("");
    setSearch("");

    dispatch(fetchProducts());
  };

  // Search by product title
  const filteredProducts = items.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="page-title">Available Products</h2>

      {successMessage && (
        <div className="success-message">
          <span>{successMessage}</span>

          <button
            type="button"
            onClick={() =>
              navigate(location.pathname, {
                replace: true,
                state: null
              })
            }
          >
            ×
          </button>
        </div>
      )}

      {/* Search and product filters */}
      <form className="filter-form" onSubmit={handleFilter}>
        <input
          className="search-input"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={event => setSearch(event.target.value)}
        />

        <select
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
          {categories.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Minimum price"
          min="0"
          value={minPrice}
          onChange={event => setMinPrice(event.target.value)}
        />

        <input
          type="number"
          placeholder="Maximum price"
          min="0"
          value={maxPrice}
          onChange={event => setMaxPrice(event.target.value)}
        />

        <button type="submit" className="primary-btn">
          Apply Filters
        </button>

        <button
          type="button"
          className="secondary-btn"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>

      {/* Product List */}
      {productsLoading ? (
        <p>Loading products...</p>
      ) : productsError ? (
        <p className="error-text">{productsError}</p>
      ) : filteredProducts.length === 0 ? (
        <div className="empty-message">
          No products found.
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
