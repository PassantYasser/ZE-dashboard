import { addWorker, getAllWorkers, getDesignations } from "@/redux/api/Workers/WorkersApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//get all workers
export const getAllWorkersThunk = createAsyncThunk(
  "workers/getAllWorkers",
  async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const response = await getAllWorkers(page, limit);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get Designations
export const getDesignationsThunk = createAsyncThunk(
  'workers/getDesignationsThunk',
  async(_,{rejectWithValue})=>{
    try{
      const response = await getDesignations();
      return response
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      } 
  }
)

//add new worker
export const addWorkerThunk = createAsyncThunk(
  'worker/addWorkerThunk',
  async(formData , {rejectWithValue})=>{
    try{
      const response = await addWorker(formData)
      console.log('addworkerSlice' ,response.data );
      return response.data
    }catch(error){
      return rejectWithValue(error.response?.data || error.message);
    }
  }
)

const initialState ={
  workers: [],
  addWorker:null ,
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  getDesignations : null
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
      )
      // ✅ Get designations
      .addCase(getDesignationsThunk.pending, (state) => {
        state.loadingList = true;
        state.errorList = null;
      })
      .addCase(getDesignationsThunk.fulfilled, (state, action) => {
        state.loadingList = false;
        state.getDesignations = action.payload
      })
      .addCase(getDesignationsThunk.rejected, (state, action) => {
        state.loadingList = false;
        state.errorList = action.payload;
      })
      // ✅ Add new worker
      .addCase(addWorkerThunk.pending, (state) => {
        state.loadingDetails = true;
        state.errorDetails = null;
      })
      .addCase(addWorkerThunk.fulfilled, (state, action) => {
        state.loadingDetails = false;
        state.addWorker = action.payload;
      })
      .addCase(addWorkerThunk.rejected, (state, action) => {
        state.loadingDetails = false;
        state.errorDetails = action.payload;
      })
  },
})
export const { setPage } = WorkersSlice.actions;
export default WorkersSlice.reducer;
