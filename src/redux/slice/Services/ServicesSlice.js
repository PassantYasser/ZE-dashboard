
import { getAllServices } from "@/redux/api/Services/ServicesApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllServicesThunk = createAsyncThunk(
  "services/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllServices();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllServicesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllServicesThunk.fulfilled, (state, action) => {
        state.loading = false;
        // If your API returns { services: [...] }
        state.services = action.payload.services || action.payload;
      })
      .addCase(getAllServicesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default servicesSlice.reducer;
