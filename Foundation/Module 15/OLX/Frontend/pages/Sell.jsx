
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";

import {
  createProduct,
  updateProduct,
  fetchMyProducts,
  deleteProduct
} from "../features/products/productSlice";

const categories = [
  { label: "Fashion", value: "Fashion" },
  { label: "Electronics", value: "Electronic" },
  { label: "Vehicles", value: "Vehicles" },
  { label: "Furniture", value: "Furniture" }
];

function Sell() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    myProducts,
    myProductsLoading,
    myProductsError,
    submitLoading,
    submitError,
    deletingId
  } = useSelector(state => state.products);

  const [deleteMessage, setDeleteMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      imageUrl: ""
    }
  });

  // Fetch this user's listings
  useEffect(() => {
    dispatch(fetchMyProducts());
  }, [dispatch]);

  // Load product information when editing
  useEffect(() => {
    if (!id) {
      reset({
        title: "",
        description: "",
        price: "",
        category: "",
        imageUrl: ""
      });

      return;
    }

    if (!myProductsLoading) {
      const product = myProducts.find(
        item => item._id === id
      );

      if (product && !product.isSold) {
        reset({
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          imageUrl: product.imageUrl
        });
      }
    }
  }, [id, myProducts, myProductsLoading, reset]);

  const onSubmit = async data => {
    try {
      if (id) {
        await dispatch(
          updateProduct({
            id,
            productData: data
          })
        ).unwrap();

        navigate("/", {
          state: {
            successMessage: "Your listing has been updated successfully!"
          }
        });
      } else {
        await dispatch(createProduct(data)).unwrap();

        navigate("/", {
          state: {
            successMessage: "Your product has been listed successfully!"
          }
        });
      }
    } catch (error) {
      console.error("Product save failed:", error);
    }
  };

  // Delete listing
  const handleDelete = async productId => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    setDeleteMessage("");

    try {
      await dispatch(deleteProduct(productId)).unwrap();

      setDeleteMessage("Product deleted successfully!");
    } catch (error) {
      setDeleteMessage(
        typeof error === "string"
          ? error
          : "Failed to delete product"
      );
    }
  };

  const editingProduct = id
    ? myProducts.find(item => item._id === id)
    : null;

  return (
    <div className="container sell-page">

      {/* Create / Edit Form */}
      <div className="form-container sell-form">
        <h2 className="page-title">
          {id ? "Edit Your Product" : "Sell Your Product"}
        </h2>

        {id && !myProductsLoading && !editingProduct && (
          <p className="error-text">
            Product not found in your listings.
          </p>
        )}

        {id && editingProduct?.isSold && (
          <p className="error-text">
            This product has already been sold and cannot be edited.
          </p>
        )}

        {(!id || (editingProduct && !editingProduct.isSold)) && (
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
              <label>Product Title</label>
              <input
                type="text"
                placeholder="Enter product title"
                {...register("title", {
                  required: "Product title is required",
                  minLength: {
                    value: 3,
                    message: "Title must contain at least 3 characters"
                  }
                })}
              />
              {errors.title && (
                <p className="error-text">{errors.title.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="4"
                placeholder="Enter product description"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must contain at least 10 characters"
                  }
                })}
              />
              {errors.description && (
                <p className="error-text">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Price (₹)</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                placeholder="Enter price"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                  min: {
                    value: 0.01,
                    message: "Price must be greater than zero"
                  }
                })}
              />
              {errors.price && (
                <p className="error-text">{errors.price.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                {...register("category", {
                  required: "Please select a category"
                })}
              >
                <option value="">Select Category</option>

                {categories.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>

              {errors.category && (
                <p className="error-text">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Image URL</label>
              <input
                type="url"
                placeholder="Enter product image URL"
                {...register("imageUrl", {
                  required: "Image URL is required"
                })}
              />
              {errors.imageUrl && (
                <p className="error-text">{errors.imageUrl.message}</p>
              )}
            </div>

            {submitError && (
              <p className="error-text">{submitError}</p>
            )}

            <button
              type="submit"
              className="primary-btn"
              disabled={submitLoading}
            >
              {submitLoading
                ? "Saving..."
                : id
                  ? "Update Product"
                  : "Create Listing"}
            </button>

            {id && (
              <button
                type="button"
                className="secondary-btn"
                onClick={() => navigate("/sell")}
              >
                Cancel
              </button>
            )}
          </form>
        )}
      </div>

      {/* My Listings */}
      <div className="my-listings">
        <h2 className="page-title">My Listings</h2>

        {deleteMessage && (
          <p className="success-message">
            {deleteMessage}
          </p>
        )}

        {myProductsLoading ? (
          <p>Loading your listings...</p>
        ) : myProductsError ? (
          <p className="error-text">{myProductsError}</p>
        ) : myProducts.length === 0 ? (
          <div className="empty-message">
            You haven't listed any products yet.
          </div>
        ) : (
          <div className="my-listing-list">
            {myProducts.map(product => (
              <div
                className="my-listing-item"
                key={product._id}
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="my-listing-image"
                />

                <div className="my-listing-details">
                  <h3>{product.title}</h3>

                  <p className="product-price">
                    ₹{product.price}
                  </p>

                  <p>Category: {product.category}</p>

                  <p>
                    Status:{" "}
                    <span
                      className={
                        product.isSold
                          ? "sold-status"
                          : "available-status"
                      }
                    >
                      {product.isSold ? "Sold" : "Available"}
                    </span>
                  </p>
                </div>

                <div className="listing-actions">
                  {!product.isSold && (
                    <Link
                      to={`/sell/${product._id}`}
                      className="edit-link"
                    >
                      Edit
                    </Link>
                  )}

                  {!product.isSold && (
                    <button
                      type="button"
                      className="delete-btn"
                      disabled={deletingId === product._id}
                      onClick={() => handleDelete(product._id)}
                    >
                      {deletingId === product._id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default Sell;
