import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { NodeServer_API } from "../../server";

// Create Category
export const createCategory = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "taskCreateRequest" });

    const { data } = await axios.post(`${NodeServer_API}/category`, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("Token")}`,
      },
    });

    dispatch({
      type: "categoryCreateSuccess",
      payload: data,
    });

    toast.success("Category created successfully!");
    return {
      type: "categoryCreateSuccess",
      message: "Category Created Successfully",
    };
  } catch (error) {
    dispatch({
      type: "categoryCreateFail",
      payload: error.response?.data?.message || "Failed to create task",
    });

    toast.error(error.response?.data?.message || "Failed to create task");
    return { type: "categoryCreateFail", error: error.response };
  }
};

// Delete Category
export const deleteCategory = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: "categoryDeleteRequest" });

    await axios.delete(`${NodeServer_API}/category/${taskId}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("Token")}`,
      },
    });

    dispatch({
      type: "categoryDeleteSuccess",
      payload: taskId,
    });

    toast.success("Category deleted successfully!");
    return {
      type: "categoryDeleteSuccess",
      message: "Category Deleted Successfully",
    };
  } catch (error) {
    dispatch({
      type: "categoryDeleteFail",
      payload: error.response?.data?.message || "Failed to delete task",
    });

    toast.error(error.response?.data?.message || "Failed to delete task");
    return { type: "categoryDeleteFail", error: error.response };
  }
};

// Fetch All Tasks
export const fetchAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: "categoryFetchRequest" });

    const { data } = await axios.get(`${NodeServer_API}/category`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("Token")}`,
      },
    });

    dispatch({
      type: "categoryFetchSuccess",
      payload: data.data,
    });

    return {
      type: "categoryFetchSuccess",
      message: "Tasks Fetched Successfully",
    };
  } catch (error) {
    dispatch({
      type: "categoryFetchFail",
      payload: error.response?.data?.message || "Failed to fetch tasks",
    });

    // toast.error(error.response?.data?.message || "Failed to fetch tasks");
    return { type: "categoryFetchFail", error: error.response };
  }
};
