const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/Database"); // Assuming you have a configured sequelize instance

const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 255], // Name must be at least 3 characters long
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 1000], // Description must be at least 5 characters long
      },
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
    tableName: "categories", // Define table name
  }
);

module.exports = Category;
