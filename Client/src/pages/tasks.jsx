import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TasksTable from "../components/TaskTable/TaskTable";
import TaskForm from "../components/TaskForm/TaskForm";
import {
  createTask,
  deleteTask,
  editTask,
  fetchAllTasks,
} from "../redux/actions/task";

const Tasks = () => {
  //   const [taskInput, setTaskInput] = useState("");
  //   const [editTaskId, setEditTaskId] = useState(null);
  //   const [editTaskInput, setEditTaskInput] = useState("");
  const [editTaskData, setEditTaskData] = useState({
    id: null,
    title: "",
    description: "",
    status: "",
  });

  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks); // Replace with your state slice
  const { categories } = useSelector((state) => state.category);

  // Fetch tasks on component mount
  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  // Add a new task
  const handleAddTask = (props) => {
    dispatch(createTask(props));
    // setTaskInput("");
  };

  // Edit a task
  const handleEditTask = (task) => {
    setEditTaskData({
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
    });
  };

  // Save edited task
  const handleSaveTask = (updatedTask) => {
    dispatch(editTask(updatedTask.id, updatedTask));
    setEditTaskData({ id: null, title: "", description: "", status: "" });
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-3 p-5">
      <h1 className="text-3xl font-bold mb-5">My To-Do Application</h1>

      {/* Task Form */}
      <TaskForm onAddTask={handleAddTask} categories={categories} />

      {/* Tasks Table */}
      <TasksTable
        tasks={tasks}
        loading={loading}
        error={error}
        editTaskData={editTaskData}
        onEditTask={handleEditTask}
        onSaveTask={handleSaveTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default Tasks;
