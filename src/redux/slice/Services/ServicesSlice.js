import { getAllServices, getServiceById } from "@/redux/api/Services/ServicesApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllServicesThunk = createAsyncThunk(
  "services/getAll",
  async ({ page = 1, per_page = 10 }, { rejectWithValue }) => {
    try {
      const data = await getAllServices(page, per_page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getServiceByIdThunk = createAsyncThunk(
  "services/getById",
  async (service_id, { rejectWithValue }) => {
    try {
      const data = await getServiceById(service_id);
      console.log("slice data", data);
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
    pagination: null,
    service: null,
    loadingList: false,     // ✅ separate loader for list
    loadingDetails: false,  // ✅ separate loader for single service
    errorList: null,
    errorDetails: null,
  },
  reducers: {
    clearService: (state) => {
      state.service = null; // optional clear on dialog close
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ All Services
      .addCase(getAllServicesThunk.pending, (state) => {
        state.loadingList = true;
        state.errorList = null;
      })
      .addCase(getAllServicesThunk.fulfilled, (state, action) => {
        state.loadingList = false;
        state.services = action.payload.services || action.payload;
        state.pagination = action.payload.pagination || null;
      })
      .addCase(getAllServicesThunk.rejected, (state, action) => {
        state.loadingList = false;
        state.errorList = action.payload;
      })

      // ✅ Single Service
      .addCase(getServiceByIdThunk.pending, (state) => {
        state.loadingDetails = true;
        state.errorDetails = null;
      })
      .addCase(getServiceByIdThunk.fulfilled, (state, action) => {
        state.loadingDetails = false;
        state.service = action.payload;
      })
      .addCase(getServiceByIdThunk.rejected, (state, action) => {
        state.loadingDetails = false;
        state.errorDetails = action.payload;
      });
  },
});

export const { clearService } = servicesSlice.actions;
export default servicesSlice.reducer;
