const Task = require("../models/tasks"); // Import the Task model

// Create Task
const createTask = async (req, res) => {
  try {
    const { title, category, description, dueDate } = req.body;

    // Check if task with the same title already exists
    const existingTask = await Task.findOne({ where: { title } });
    if (existingTask) {
      return res
        .status(400)
        .json({ message: "Task with this title already exists" });
    }

    const newTask = await Task.create({
      title,
      description,
      category,
      dueDate,
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create task" });
  }
};

// Edit Task
const editTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, dueDate } = req.body;

    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Update task details
    task.title = title || task.title;
    task.description = description || task.description;
    task.dueDate = dueDate || task.dueDate;

    await task.save();

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update task" });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findByPk(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.destroy();

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete task" });
  }
};

// Fetch All Tasks
const fetchAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json({ data: tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

module.exports = { createTask, editTask, deleteTask, fetchAllTasks };
