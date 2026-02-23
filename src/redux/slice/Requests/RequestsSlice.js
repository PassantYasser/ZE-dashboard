import { getBookings, getDrowpdownFilters } from "@/redux/api/Requests/RequestsApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBookingsThunk = createAsyncThunk('Requests/getBookingsThunk',
  async(filters = {} , {rejectWithValue})=>{
    try{
      const response =await getBookings(filters)
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to get bookings data");
    }
  }
)

export const getDrowpdownFiltersThunk = createAsyncThunk('Requests/getDrowpdownFiltersThunk',
  async(_ , {rejectWithValue})=>{
    try{
      const response = await getDrowpdownFilters()
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to get drowpdown filters data");
    }
  }
)

const initialState = {
  loading: false,
  error: null,
  bookings:[],
  pagination: null,
  filterData:[]
}

const RequestsSlice = createSlice({
  name:'Requests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder 
      //getBookingsThunk
      .addCase(getBookingsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookingsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
        state.pagination = action.payload?.pagination || null;
      })
      .addCase(getBookingsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //getDrowpdownFiltersThunk
      .addCase(getDrowpdownFiltersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDrowpdownFiltersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.filterData = action.payload;
      })
      .addCase(getDrowpdownFiltersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export default RequestsSlice.reducer;