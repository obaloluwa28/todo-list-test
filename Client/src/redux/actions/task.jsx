import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { NodeServer_API } from "../../server";

// Create Task
export const createTask = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "taskCreateRequest" });

    const { data } = await axios.post(`${NodeServer_API}/tasks`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("Token")}`,
      },
    });

    dispatch({
      type: "taskCreateSuccess",
      payload: data,
    });

    toast.success("Task created successfully!");
    return { type: "taskCreateSuccess", message: "Task Created Successfully" };
  } catch (error) {
    dispatch({
      type: "taskCreateFail",
      payload: error.response?.data?.message || "Failed to create task",
    });

    toast.error(error.response?.data?.message || "Failed to create task");
    return { type: "taskCreateFail", error: error.response };
  }
};

// Edit Task
export const editTask = (taskId, updatedData) => async (dispatch) => {
  try {
    dispatch({ type: "taskEditRequest" });

    const { data } = await axios.put(
      `${NodeServer_API}/tasks/${taskId}`,
      updatedData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("Token")}`,
        },
      }
    );

    dispatch({
      type: "taskEditSuccess",
      payload: data,
    });

    toast.success("Task updated successfully!");
    return { type: "taskEditSuccess", message: "Task Updated Successfully" };
  } catch (error) {
    dispatch({
      type: "taskEditFail",
      payload: error.response?.data?.message || "Failed to update task",
    });

    toast.error(error.response?.data?.message || "Failed to update task");
    return { type: "taskEditFail", error: error.response };
  }
};

// Delete Task
export const deleteTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "taskDeleteRequest" });

    await axios.delete(`${NodeServer_API}/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("Token")}`,
      },
    });

    dispatch({
      type: "taskDeleteSuccess",
      payload: taskId,
    });

    toast.success("Task deleted successfully!");
    return { type: "taskDeleteSuccess", message: "Task Deleted Successfully" };
  } catch (error) {
    dispatch({
      type: "taskDeleteFail",
      payload: error.response?.data?.message || "Failed to delete task",
    });

    toast.error(error.response?.data?.message || "Failed to delete task");
    return { type: "taskDeleteFail", error: error.response };
  }
};

// Fetch All Tasks
export const fetchAllTasks = () => async (dispatch) => {
  try {
    dispatch({ type: "taskFetchRequest" });

    const { data } = await axios.get(`${NodeServer_API}/tasks`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("Token")}`,
      },
    });

    dispatch({
      type: "taskFetchSuccess",
      payload: data.data,
    });

    return { type: "taskFetchSuccess", message: "Tasks Fetched Successfully" };
  } catch (error) {
    dispatch({
      type: "taskFetchFail",
      payload: error.response?.data?.message || "Failed to fetch tasks",
    });

    // toast.error(error.response?.data?.message || "Failed to fetch tasks");
    return { type: "taskFetchFail", error: error.response };
  }
};
