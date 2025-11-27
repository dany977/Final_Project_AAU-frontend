// import axios from "axios";

// const BASE_API_URL = process.env.REACT_APP_API_URL || "https://final-project-aau-backend.onrender.com";

// const api = axios.create({
//   // 2. **Construct the full URL**
//   baseURL: `${BASE_API_URL}/api`,
//   withCredentials: true,
// });

// // Attach token automatically (Your existing interceptor)
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

