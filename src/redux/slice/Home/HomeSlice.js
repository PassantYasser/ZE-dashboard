import { setModuleId } from "@/redux/api/Home/HomeApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//add or update module
export const setModuleIdThunk = createAsyncThunk('Home/setModuleIdThunk',
  async(module_id  , {rejectWithValue})=>{
    try{
      const response = await setModuleId(module_id )
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to add or update module ");
    }
  }
)

const initialState = {
  loading:false,
  error:null,
  moduleId:''
}

const homeSlice = createSlice({
  name:'Home' , 
  initialState ,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
      .addCase(setModuleIdThunk.pending , (state)=>{
        state.loading =true,
        state.error = null
      })
      .addCase(setModuleIdThunk.fulfilled , (state , action)=>{
        state.loading = false;
        state.moduleId = action.payload; 
        state.error = null;
      })
      .addCase(setModuleIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
  }
})
export const {} = homeSlice.actions;

export default homeSlice.reducer;