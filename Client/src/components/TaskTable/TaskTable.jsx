import React, { useState, useEffect } from "react";
import Select from "react-select";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { utsDateformatter } from "../../utils/utlsDateConverter";

const TasksTable = ({
  tasks,
  loading,
  error,
  editTaskData,
  onEditTask,
  onSaveTask,
  onDeleteTask,
}) => {
  const [localEditData, setLocalEditData] = useState(editTaskData);

  // Sync localEditData with editTaskData when editTaskData changes
  useEffect(() => {
    setLocalEditData(editTaskData);
  }, [editTaskData]);

  const statusOptions = [
    { value: 1, label: "Completed" },
    { value: 0, label: "Pending" },
  ];

  const handleInputChange = (id, field, value) => {
    setLocalEditData((prev) => ({ ...prev, [field]: value, id: id }));
  };

  const handleSave = () => {
    onSaveTask(localEditData);
  };

  if (loading)
    return <p className="text-center text-blue-500">Loading tasks...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">All Tasks</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Task</th>
            <th className="px-4 py-2 border">Category</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Due Date</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">
                {editTaskData.id === task.id ? (
                  <input
                    type="text"
                    value={localEditData?.title || ""}
                    onChange={(e) =>
                      handleInputChange(task.id, "title", e.target.value)
                    }
                    className="px-2 py-1 outline-none border rounded-lg w-full"
                  />
                ) : (
                  task.title
                )}
              </td>
              <td className="px-4 py-2 border">{task.category}</td>
              <td className="px-4 py-2 border">
                {editTaskData.id === task.id ? (
                  <input
                    type="text"
                    value={localEditData?.description || ""}
                    onChange={(e) =>
                      handleInputChange(task.id, "description", e.target.value)
                    }
                    className="px-2 py-1 outline-none border rounded-lg w-full"
                  />
                ) : (
                  task.description
                )}
              </td>
              <td className="px-4 py-2 border">
                {utsDateformatter(task.dueDate)}
              </td>
              <td className="px-4 py-2 border">
                {editTaskData.id === task.id ? (
                  <Select
                    options={statusOptions}
                    value={statusOptions.find(
                      (option) => option.value === localEditData.status
                    )}
                    onChange={(selectedOption) =>
                      handleInputChange(task.id, "status", selectedOption.value)
                    }
                    className="w-full"
                    placeholder="Select Status"
                  />
                ) : task.status ? (
                  "Completed"
                ) : (
                  "Pending"
                )}
              </td>
              <td className="px-4 py-2 border">
                <div className="flex gap-2 justify-center">
                  {editTaskData.id === task.id ? (
                    <button
                      onClick={handleSave}
                      className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => onEditTask(task)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                    >
                      <MdOutlineEdit size={20} />
                    </button>
                  )}
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    <MdDeleteOutline size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksTable;
