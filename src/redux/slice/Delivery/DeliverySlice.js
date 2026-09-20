import { getDeliveryMap, getMyDeliveries, getOrders } from "@/redux/api/Delivery/DeliveryApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/** Food delivery*********************************************************** */
//---------------------------------------------------------------------------
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

export const getDeliveryMapThunk = createAsyncThunk('Delivery/getDeliveryMap', 
  async (_ , { rejectWithValue }) => {
    try{
      const response = await getDeliveryMap()
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

/** Delivery*********************************************************** */
//---------------------------------------------------------------------------

export const getMyDeliveriesThunk = createAsyncThunk(
  'parcel/getMyDeliveriesThunk',
  async (filter, thunkAPI) => {
    try {
      const data = await getMyDeliveries(filter)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data)
    }
  }
)



const initialState = {
  loading: false,
  error: null,
  getOrders:[],
  getDeliveryMap:[],
  getMyDeliveries:[]
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
      //getDeliveryMapThunk
      .addCase(getDeliveryMapThunk.pending , (state)=>{
        state.loading =true,
        state.error = null
      })
      .addCase(getDeliveryMapThunk.fulfilled , (state , action)=>{
        state.loading = false;
        state.getDeliveryMap = action.payload; 
        state.error = null;
      })
      .addCase(getDeliveryMapThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })

      //getMyDeliveriesThunk
      .addCase(getMyDeliveriesThunk.pending , (state)=>{
        state.loading =true,
        state.error = null
      })
      .addCase(getMyDeliveriesThunk.fulfilled , (state , action)=>{
        state.loading = false;
        state.getMyDeliveries = action.payload; 
        state.error = null;
      })
      .addCase(getMyDeliveriesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
  }

})

export const {} = DeliverySlice.actions;

export default DeliverySlice.reducer;