import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/Auth/AuthSlice";
import servicesReducer from "./slice/Services/ServicesSlice";

export const store = configureStore({
  reducer:{
    auth: authReducer,
    services:servicesReducer,
  }
})