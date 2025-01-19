const Category = require("../models/Category"); // Import your Category model
const { validationResult } = require("express-validator");

const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check if the category name already exists
    const existingCategory = await Category.findOne({ where: { name } });

    if (existingCategory) {
      return res.status(400).json({ message: "Category name already exists" });
    }

    const newCategory = new Category({
      name,
      description,
    });

    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    await category.destroy();
    const categories = await Category.findAll();

    res
      .status(200)
      .json({ message: "Category deleted successfully", data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const fetchAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createCategory, deleteCategory, fetchAllCategories };
