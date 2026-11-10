const Product = require("../models/Product");

const checkout = async (req, res, next) => {
  try {
    const { productIds } = req.body;

    // Validate product IDs
    if (!Array.isArray(productIds) || productIds.length === 0) {
      return res.status(400).json({
        message: "Please provide products for checkout"
      });
    }

    // Remove duplicate IDs
    const uniqueIds = [...new Set(productIds)];

    // Find products that are available
    const products = await Product.find({
      _id: { $in: uniqueIds },
      isSold: false
    });

    // Check whether all products are available
    if (products.length !== uniqueIds.length) {
      return res.status(400).json({
        message: "One or more products are unavailable"
      });
    }

    // Prevent users from purchasing their own listings
    const ownProduct = products.some(
      (product) =>
        product.sellerId.toString() === req.user._id.toString()
    );

    if (ownProduct) {
      return res.status(400).json({
        message: "You cannot purchase your own products"
      });
    }

    // Mark products as sold
    const result = await Product.updateMany(
      {
        _id: { $in: uniqueIds },
        isSold: false
      },
      {
        $set: { isSold: true }
      }
    );

    // Check whether every product was updated
    if (result.modifiedCount !== uniqueIds.length) {
      return res.status(409).json({
        message: "Some products are no longer available. Please refresh your cart."
      });
    }

    res.status(200).json({
      message: "Checkout successful",
      purchasedCount: result.modifiedCount,
      productIds: uniqueIds
    });

  } catch (error) {
    next(error);
  }
};

module.exports = checkout;