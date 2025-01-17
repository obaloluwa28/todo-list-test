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
  const [taskInput, setTaskInput] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskInput, setEditTaskInput] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks); // Replace with your state slice

  // Fetch tasks on component mount
  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  // Add a new task
  const handleAddTask = (props) => {
    // if (taskInput.trim() === "") return;

    console.log(props);
    dispatch(createTask(props));
    setTaskInput("");
  };

  // Edit a task
  const handleEditTask = (id, text) => {
    setEditTaskId(id);
    setEditTaskInput(text);
  };

  // Save edited task
  const handleSaveTask = () => {
    dispatch(editTask(editTaskId, { text: editTaskInput }));
    setEditTaskId(null);
    setEditTaskInput("");
  };

  // Delete a task
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-3 p-5">
      <h1 className="text-3xl font-bold mb-5">My To-Do Application</h1>

      {/* Input Section */}

      {/* Task Form */}
      <TaskForm
        tasks={tasks}
        editTaskId={editTaskId}
        editTaskInput={editTaskInput}
        setEditTaskInput={setEditTaskInput}
        handleSaveTask={handleSaveTask}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        handleAddTask={handleAddTask}
      />

      {/* Tasks Table */}
      <TasksTable
        tasks={tasks}
        editTaskId={editTaskId}
        editTaskInput={editTaskInput}
        setEditTaskInput={setEditTaskInput}
        handleSaveTask={handleSaveTask}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default Tasks;
