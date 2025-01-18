import React from "react";
import { useSelector } from "react-redux";
import { utsDateformatter } from "../../utils/utlsDateConverter";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

const TasksTable = ({
  editTaskId,
  editTaskInput,
  setEditTaskInput,
  handleSaveTask,
  handleEditTask,
  handleDeleteTask,
}) => {
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  if (loading) {
    return <p className="text-center text-blue-500">Loading tasks...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">All Tasks</h2>
      <div className="overflow-x-auto">
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
                  {editTaskId === task.id ? (
                    <input
                      type="text"
                      value={editTaskInput}
                      onChange={(e) => setEditTaskInput(e.target.value)}
                      className="px-2 py-1 outline-none border rounded-lg w-full"
                    />
                  ) : (
                    task.title
                  )}
                </td>
                <td className="px-4 py-2 border">{task.category}</td>
                <td className="px-4 py-2 border">{task.description}</td>

                <td className="px-4 py-2 border">
                  {utsDateformatter(task.dueDate)}
                </td>
                <td className="px-4 py-2 border">
                  {task.status ? "Completed" : "Pending"}
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex gap-2 justify-center">
                    {editTaskId === task.id ? (
                      <button
                        onClick={handleSaveTask}
                        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditTask(task.id, task.text)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                      >
                        <MdOutlineEdit size={20} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteTask(task.id)}
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
    </div>
  );
};

export default TasksTable;
