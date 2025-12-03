import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/Auth/AuthSlice";
import servicesReducer from "./slice/Services/ServicesSlice";
import workerReducer from "./slice/Workers/WorkersSlice";

export const store = configureStore({
  reducer:{
    auth: authReducer,
    services:servicesReducer,
    workers:workerReducer,
  }
})