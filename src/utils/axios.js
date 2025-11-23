import axios from "axios";

// 1. **USE ENVIRONMENT VARIABLE:** // Vercel will inject the value set for REACT_APP_API_URL here.
// The fallback is the Render URL, which is a bit safer than localhost.
// NOTE: Vercel/CRA require the REACT_APP_ prefix for public variables.
const BASE_API_URL = process.env.REACT_APP_API_URL || "https://final-project-aau-backend.onrender.com";

const api = axios.create({
  // 2. **Construct the full URL**
  baseURL: `${BASE_API_URL}/api`,
  withCredentials: true,
});

// Attach token automatically (Your existing interceptor)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;