const express = require("express");
const router = express.Router();
const {
  createCategory,
  deleteCategory,
  fetchAllCategories,
} = require("../controllers/categoryController.jsx");

// Create Category
router.post("/", createCategory);

// Delete Category
router.delete("/:id", deleteCategory);

// Fetch All Categories
router.get("/", fetchAllCategories);

module.exports = router;
