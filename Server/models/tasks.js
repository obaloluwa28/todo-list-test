const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/Database"); // Sequelize instance

const Task = sequelize.define(
  "Task",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255], // Title length should be between 3 and 255 characters
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255], // Title length should be between 3 and 255 characters
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 1000], // Description length should be between 5 and 1000 characters
      },
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    tableName: "tasks", // Define table name
  }
);

module.exports = Task;
