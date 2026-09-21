import { getEarnings } from "@/redux/api/Bill/BillApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getEarningsThunk = createAsyncThunk('bill/getEarnings',
  async(_ , thunkAPI) =>{
    try{
      const response = await getEarnings()
      return response.data
    }catch(error){
      return thunkAPI.rejectWithValue(error.response?.data)
    }
  }
)

const initialState = {
  loading:false,
  error: null,
  getEarnings:[],
}

const BillSlice = createSlice({
  name:'Bill',
  initialState,
  reducers:{
  },

  extraReducers:(builder)=>{
    builder 
    //getEarningsThunk
      .addCase(getEarningsThunk.pending , (state)=>{
        state.loading =true,
        state.error = null
      })
      .addCase(getEarningsThunk.fulfilled , (state , action)=>{
        state.loading = false;
        state.getEarnings = action.payload; 
        state.error = null;
      })
      .addCase(getEarningsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
  }

})

export const {} = BillSlice.actions;
export default BillSlice.reducer