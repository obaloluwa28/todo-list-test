const express = require("express");
const router = express.Router();
const {
  createTask,
  editTask,
  deleteTask,
  fetchAllTasks,
} = require("../controllers/tasksController.jsx");

// Route to create a task
router.post("/", createTask);

// Route to edit a task
router.put("/:id", editTask);

// Route to delete a task
router.delete("/:id", deleteTask);

// Route to fetch all tasks
router.get("/", fetchAllTasks);

module.exports = router;
