import { getBookingByID, getBookings, getDrowpdownFilters } from "@/redux/api/Requests/RequestsApi";
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

export const getBookingByIDThunk = createAsyncThunk('Requests/getBookingByIDThunk' ,
  async(id,{rejectWithValue})=>{
    try{
      const response= await getBookingByID(id)
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to get data of booking by ID ");
    }
  }
)

const initialState = {
  loading: false,
  error: null,
  bookings:[],
  pagination: null,
  filterData:[],
  bookingDetails:null,
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
      //getBookingByIDThunk
      .addCase(getBookingByIDThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBookingByIDThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingDetails = action.payload.booking;
      })
      .addCase(getBookingByIDThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
})

export default RequestsSlice.reducer;