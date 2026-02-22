import { getBookings } from "@/redux/api/Requests/RequestsApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBookingsThunk = createAsyncThunk('Requests/getBookingsThunk',
  async(_ , {rejectWithValue})=>{
    try{
      const response =await getBookings()
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to get bookings data");
    }
  }
)

const initialState = {
  loading: false,
  error: null,
  bookings:[]
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
      })
      .addCase(getBookingsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export default RequestsSlice.reducer;