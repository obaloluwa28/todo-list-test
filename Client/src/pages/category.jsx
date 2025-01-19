import React, { useState } from "react";
import { createCategory, deleteCategory } from "../redux/actions/category";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";

const CategoryManager = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const [formData, setFormData] = useState({ name: "", description: "" });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCategory(formData));
  };

  // Handle delete category
  const handleDelete = async (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-3 p-5">
      <h1 className="text-3xl font-bold mb-6">Category Manager</h1>

      {/* Add Category Form */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none text-sm focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none text-sm focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Category
          </button>
        </form>
      </div>

      {/* Categories Table */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">All Categories</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2 text-sm">
                  {category.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm">
                  {category.description}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm">
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                  >
                    <MdDeleteOutline size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryManager;
