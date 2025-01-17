import React, { useState } from "react";
import Select from "react-select";

const TaskForm = ({
  tasks,
  editTaskId,
  editTaskInput,
  setEditTaskInput,
  handleSaveTask,
  handleAddTask,
}) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");

  const handleCategoryChange = (category) => {
    setTaskCategory(category);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editTaskId) {
      handleSaveTask();
    } else {
      handleAddTask({
        title: taskTitle,
        description: taskDescription,
        category: taskCategory?.value || "",
        dueDate: taskDueDate,
      });
    }

    // Clear input fields after submission
    setTaskTitle("");
    setTaskDescription("");
    setTaskCategory("");
    setTaskDueDate("");
  };

  const category = [
    {
      id: 1,
      title: "Work",
      label: "work",
    },
    {
      id: 2,
      title: "School",
      label: "school",
    },
    {
      id: 3,
      title: "Personal",
      label: "personal",
    },
  ];

  const categoryOptions = category?.map((catg) => ({
    value: catg.title,
    label: catg.label,
  }));

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      {/* Add Task Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Add a Task</h2>

        <form
          className="flex flex-wrap items-center gap-3"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            placeholder="Task Title *"
            value={editTaskId ? editTaskInput : taskTitle}
            onChange={(e) =>
              editTaskId
                ? setEditTaskInput(e.target.value)
                : setTaskTitle(e.target.value)
            }
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          {!editTaskId && (
            <>
              <input
                type="text"
                placeholder="Description *"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />

              <Select
                options={categoryOptions}
                value={taskCategory}
                onChange={handleCategoryChange}
                className="w-full min-w-[180px] rounded-lg focus:ring-blue-300 grow"
                placeholder="Select Categories"
              />

              <input
                type="date"
                value={taskDueDate}
                onChange={(e) => setTaskDueDate(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            {editTaskId ? "Save" : "Add Task"}
          </button>
        </form>
      </div>

      {/* All Tasks Section */}
    </div>
  );
};

export default TaskForm;
