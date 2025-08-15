import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import axios from "axios";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAOUYW3jaZsiGFw9j5GnzYIwj-1-7QKWWs",
  authDomain: "project-c468b.firebaseapp.com",
  projectId: "project-c468b",
  storageBucket: "project-c468b.firebasestorage.app",
  messagingSenderId: "265085459296",
  appId: "1:265085459296:web:355a4c536a2024abc2dc05",
  measurementId: "G-DKDFSNE74W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Axios instance
export const axiosInstance = axios.create({
  baseURL: "https://project-c468b-default-rtdb.firebaseio.com/",
});

//////////////////////
// Project CRUD
//////////////////////
export const addProject = async (project) => {
  try {
    const res = await axiosInstance.post("/projects.json", {
      ...project,
      createdAt: Date.now(),
    });
    return res.data;
  } catch (err) {
    console.error("addProject AxiosError:", err);
    return null;
  }
};

export const getProjects = async () => {
  try {
    const res = await axiosInstance.get("/projects.json");
    return res.data || {}; // return empty object if node doesn't exist
  } catch (err) {
    console.error("getProjects AxiosError:", err);
    return {};
  }
};

export const updateProject = async (projectId, projectData) => {
  try {
    await axiosInstance.patch(`/projects/${projectId}.json`, projectData);
  } catch (err) {
    console.error("updateProject AxiosError:", err);
  }
};

export const deleteProject = async (projectId) => {
  try {
    await axiosInstance.delete(`/projects/${projectId}.json`);
  } catch (err) {
    console.error("deleteProject AxiosError:", err);
  }
};

//////////////////////
// Task CRUD
//////////////////////
export const addTask = async (projectId, task) => {
  try {
    const res = await axiosInstance.post(`/projects/${projectId}/tasks.json`, {
      ...task,
      createdAt: Date.now(),
    });
    return res.data;
  } catch (err) {
    console.error("addTask AxiosError:", err);
    return null;
  }
};

export const getTasks = async (projectId) => {
  try {
    const res = await axiosInstance.get(`/projects/${projectId}/tasks.json`);
    return res.data || {};
  } catch (err) {
    console.error("getTasks AxiosError:", err);
    return {};
  }
};

export const updateTask = async (projectId, taskId, taskData) => {
  try {
    await axiosInstance.patch(`/projects/${projectId}/tasks/${taskId}.json`, taskData);
  } catch (err) {
    console.error("updateTask AxiosError:", err);
  }
};

export const deleteTask = async (projectId, taskId) => {
  try {
    await axiosInstance.delete(`/projects/${projectId}/tasks/${taskId}.json`);
  } catch (err) {
    console.error("deleteTask AxiosError:", err);
  }
};
