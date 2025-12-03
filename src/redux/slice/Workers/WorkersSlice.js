import { getAllWorkers } from "@/redux/api/Workers/WorkersApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllWorkersThunk = createAsyncThunk(
  "workers/getAllWorkers",
  async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const response = await getAllWorkers(page, limit);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

const initialState ={
  workers: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
}
const WorkersSlice = createSlice({
  name: "workers",
  initialState,
   reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllWorkersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      }
      )
      .addCase(getAllWorkersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.workers = action.payload.handymen || [];
        state.currentPage = action.payload.meta?.current_page || 1;
        state.totalPages = action.payload.meta?.last_page || 1;
      }
      )
      .addCase(getAllWorkersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
      );
  },
})
export const { setPage } = WorkersSlice.actions;
export default WorkersSlice.reducer;
