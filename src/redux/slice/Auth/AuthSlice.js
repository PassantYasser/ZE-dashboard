import { login } from "@/redux/api/Auth/AuthApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loginThunk = createAsyncThunk('auth/loginThunk',
  async(loginData , thunkAPI)=>{
    try{
      const data = await login(loginData)
      localStorage.setItem('token', data.access_token)
      localStorage.setItem('provider_id', data.provider.id);
      return data
    }catch(error){
      return thunkAPI.rejectWithValue(
        error.response.data.message || 'Login failed'
      )
    }
  }
)


const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
  
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("provider_id");
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },

  
  extraReducers:(builder)=>{
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.provider; 
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
        state.isAuthenticated = false;
      });
  }
})

export const {logout } = authSlice.actions;

export default authSlice.reducer;
