const express = require("express");
const protect = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser
} = require("../controllers/authController");

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

module.exports = router;

// Get logged-in user
router.get("/me", protect, (req, res) => {
  res.status(200).json({
    message: "Authenticated successfully",
    user: req.user
  });
});