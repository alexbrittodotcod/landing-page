// utils/api.js or services/httpService.js
import axios from "axios";

// API base URL (can be environment-specific)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL; // It's best to store the base URL in your .env file

// Create an axios instance with headers
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get Request without re-adding headers in the individual request
export const getRequest = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("GET Request failed", error);
    throw error;
  }
};

// Get Request with ID (similar to your `getRequestByType`)
export const getRequestById = async (endpoint, id, params = {}) => {
  try {
    const response = await api.get(`${endpoint}${id}`, { params });
    return response.data;
  } catch (error) {
    console.error("GET by ID Request failed", error);
    throw error;
  }
};

// Post Request
export const postRequest = async (endpoint, payload, params = {}) => {
  try {
    const response = await api.post(endpoint, payload, { params });
    return response.data;
  } catch (error) {
    console.error("POST Request failed", error);
    throw error;
  }
};

// Put Request
export const putRequest = async (endpoint, payload, params = {}) => {
  try {
    const response = await api.put(endpoint, payload, { params });
    return response.data;
  } catch (error) {
    console.error("PUT Request failed", error);
    throw error;
  }
};

// Delete Request
export const deleteRequest = async (endpoint, params = {}) => {
  try {
    const response = await api.delete(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("DELETE Request failed", error);
    throw error;
  }
};

// Patch Request
export const patchRequest = async (endpoint, payload) => {
  try {
    const response = await api.patch(endpoint, payload);
    return response.data;
  } catch (error) {
    console.error("PATCH Request failed", error);
    throw error;
  }
};
