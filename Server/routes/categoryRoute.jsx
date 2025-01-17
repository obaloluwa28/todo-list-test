const express = require("express");
const router = express.Router();
const {
  createCategory,
  deleteCategory,
  fetchAllCategories,
} = require("../controllers/categoryController.jsx");

// Create Category
router.post("/category", createCategory);

// Delete Category
router.delete("/category/:id", deleteCategory);

// Fetch All Categories
router.get("/category", fetchAllCategories);

module.exports = router;
