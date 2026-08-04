import { getOrders } from "@/redux/api/Delivery/DeliveryApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getOrdersThunk = createAsyncThunk('Delivery/getOrders', 
  async (_ , { rejectWithValue }) => {
    try{
      const response = await getOrders()
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

const initialState = {
  loading: false,
  error: null,
  getOrders:[]
}

const DeliverySlice = createSlice({
  name:'Delivery' , 
  initialState ,
  reducers:{
  },

  extraReducers:(builder)=>{
    builder
      //getOrdersThunk
      .addCase(getOrdersThunk.pending , (state)=>{
        state.loading =true,
        state.error = null
      })
      .addCase(getOrdersThunk.fulfilled , (state , action)=>{
        state.loading = false;
        state.getOrders = action.payload; 
        state.error = null;
      })
      .addCase(getOrdersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
  }

})

export const {} = DeliverySlice.actions;

export default DeliverySlice.reducer;