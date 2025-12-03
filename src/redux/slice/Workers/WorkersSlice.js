import { getAllWorkers } from "@/redux/api/Workers/WorkersApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllWorkersThunk = createAsyncThunk(
  "workers/getAllWorkers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllWorkers();
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
}
const WorkersSlice = createSlice({
  name: "workers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllWorkersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      }
      )
      .addCase(getAllWorkersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.workers = action.payload;
      }
      )
      .addCase(getAllWorkersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
      );
  },
})

export default WorkersSlice.reducer;
