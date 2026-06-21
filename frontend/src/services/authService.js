import API from "../api/axios";

export const registerUser = (data) => API.post("/register", data);

export const loginUser = (data) => API.post("/login", data);

export const verifyEmail = (data) => API.post("/verify-email", data);

export const getMe = () => API.get("/get-me");

export const logoutUser = () => API.get("/logout");

export const logoutAll = () => API.get("/logout-all");
