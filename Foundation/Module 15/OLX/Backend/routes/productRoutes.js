
const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getMyProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

const protect = require("../middleware/authMiddleware");

// Public route
router.get("/", getProducts);

// Protected routes
router.get("/my-products", protect, getMyProducts);
router.post("/", protect, createProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

// Single product route
router.get("/:id", getProductById);

module.exports = router;
