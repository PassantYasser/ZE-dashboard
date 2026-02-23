import { getBookings } from "@/redux/api/Requests/RequestsApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBookingsThunk = createAsyncThunk('Requests/getBookingsThunk',
  async(page = 1 , {rejectWithValue})=>{
    try{
      const response =await getBookings(page)
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to get bookings data");
    }
  }
)

const initialState = {
  loading: false,
  error: null,
  bookings:[],
  pagination: null
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
  }
})

export default RequestsSlice.reducer;