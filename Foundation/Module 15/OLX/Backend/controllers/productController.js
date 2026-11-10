
const Product = require("../models/Product");

// Allowed categories
const categories = [
  "Fashion",
  "Electronic",
  "Vehicles",
  "Furniture"
];

// Create Product
const createProduct = async (req, res, next) => {
  try {
    const {
      title,
      description,
      price,
      category,
      imageUrl
    } = req.body;

    if (!title || !description || !price || !category || !imageUrl) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    if (!categories.includes(category)) {
      return res.status(400).json({
        message: "Please select a valid category"
      });
    }

    const productPrice = Number(price);

    if (!Number.isFinite(productPrice) || productPrice <= 0) {
      return res.status(400).json({
        message: "Price must be greater than zero"
      });
    }

    const product = await Product.create({
      title,
      description,
      price: productPrice,
      category,
      imageUrl,
      sellerId: req.user._id
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product
    });
  } catch (error) {
    next(error);
  }
};

// Get All Available Products
const getProducts = async (req, res, next) => {
  try {
    const {
      category,
      minPrice,
      maxPrice
    } = req.query;

    const query = {
      isSold: false
    };

    // Category filter
    if (category && category !== "All Products") {
      if (!categories.includes(category)) {
        return res.status(400).json({
          message: "Invalid category"
        });
      }

      query.category = category;
    }

    // Price filters
    if (minPrice !== undefined && minPrice !== "") {
      const minimum = Number(minPrice);

      if (!Number.isFinite(minimum) || minimum < 0) {
        return res.status(400).json({
          message: "Invalid minimum price"
        });
      }

      query.price = {
        ...query.price,
        $gte: minimum
      };
    }

    if (maxPrice !== undefined && maxPrice !== "") {
      const maximum = Number(maxPrice);

      if (!Number.isFinite(maximum) || maximum < 0) {
        return res.status(400).json({
          message: "Invalid maximum price"
        });
      }

      query.price = {
        ...query.price,
        $lte: maximum
      };
    }

    if (
      query.price?.$gte !== undefined &&
      query.price?.$lte !== undefined &&
      query.price.$gte > query.price.$lte
    ) {
      return res.status(400).json({
        message: "Minimum price cannot exceed maximum price"
      });
    }

    const products = await Product.find(query)
      .populate("sellerId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      products
    });
  } catch (error) {
    next(error);
  }
};

// Get Logged-in User's Products
const getMyProducts = async (req, res, next) => {
  try {
    const products = await Product.find({
      sellerId: req.user._id
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      products
    });
  } catch (error) {
    next(error);
  }
};

// Get Single Product
const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("sellerId", "name email");

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      success: true,
      product
    });
  } catch (error) {
    next(error);
  }
};

// Update Product
const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    if (product.sellerId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You are not allowed to update this product"
      });
    }

    if (product.isSold) {
      return res.status(400).json({
        message: "Sold products cannot be updated"
      });
    }

    const {
      title,
      description,
      price,
      category,
      imageUrl
    } = req.body;

    if (!title || !description || !price || !category || !imageUrl) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    if (!categories.includes(category)) {
      return res.status(400).json({
        message: "Please select a valid category"
      });
    }

    const productPrice = Number(price);

    if (!Number.isFinite(productPrice) || productPrice <= 0) {
      return res.status(400).json({
        message: "Price must be greater than zero"
      });
    }

    product.title = title;
    product.description = description;
    product.price = productPrice;
    product.category = category;
    product.imageUrl = imageUrl;

    const updatedProduct = await product.save();

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct
    });
  } catch (error) {
    next(error);
  }
};

// Delete Product
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    if (product.sellerId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You are not allowed to delete this product"
      });
    }

    if (product.isSold) {
      return res.status(400).json({
        message: "Sold products cannot be deleted"
      });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getMyProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
