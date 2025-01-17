const express = require("express");
const taskRoute = require("./taskRoute.jsx");
const categoryRoute = require("./categoryRoute.jsx");

const router = express.Router();

// Define routes for different components
router.use("/tasks", taskRoute);
router.use("/category", categoryRoute);

module.exports = router;
