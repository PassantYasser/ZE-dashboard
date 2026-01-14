import { changeEmail, getProfile, verifyEmailOtp } from "@/redux/api/Setting/SettingApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const changeEmailThunk = createAsyncThunk('setting/changeEmail' , 
  async(email , {rejectWithValue})=>{
    try{
      const response = await changeEmail(email)
      console.log('changeEmailThunk' ,response );
      return response 
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to change email");
    }
  }
)

export const verifyEmailOtpThunk = createAsyncThunk('setting/verifyEmailOtp' , 
  async(otp , {rejectWithValue})=>{
    try{
      const response = await verifyEmailOtp(otp)
      console.log('verifyEmailOtpThunk' ,response );
      return response 
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to verify OTP");
    }
  }
)

export const getProfileThunk = createAsyncThunk('setting/getProfileThunk' , 
  async(_ , {rejectWithValue})=>{
    try{
      const response = await getProfile()
      console.log('getProfileThunk' , response);
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to get profile ");
    }
  }
)

const initialState ={
  successEmail:false,
  loading: false,
  error: null,
  otpVerified: false,
  otpLoading: false,
  otpError: null,
  profileData:null,
}
const settingSlice = createSlice({
  name:'setting' ,
  initialState,
  reducers: {
    resetEmailState: (state) => {
      state.successEmail = false;
      state.loading = false;
      state.error = null;
      state.otpVerified = false;
      state.otpLoading = false;
      state.otpError = null;
    },
    resetOtpState: (state) => {
      state.otpVerified = false;
      state.otpLoading = false;
      state.otpError = null;
    },
  },

  extraReducers:(builder)=>{
    builder
    //
    .addCase(changeEmailThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeEmailThunk.fulfilled, (state) => {
        state.loading = false;
        state.successEmail = true;
      })
      .addCase(changeEmailThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //
      .addCase(verifyEmailOtpThunk.pending, (state) => {
        state.otpLoading = true;
        state.otpError = null;
      })
      .addCase(verifyEmailOtpThunk.fulfilled, (state) => {
        state.otpLoading = false;
        state.otpVerified = true;
      })
      .addCase(verifyEmailOtpThunk.rejected, (state, action) => {
        state.otpLoading = false;
        state.otpError = action.payload;
      })
      //
      .addCase(getProfileThunk.pending , (state)=>{
        state.loading = true ;
        state.error = null;
      })
      .addCase(getProfileThunk.fulfilled , (state , action)=>{
        state.loading = false;
        state.profileData = action.payload;
      })
      .addCase(getProfileThunk.rejected , (state , action)=>{
        state.loading = false;
        state.error = action.payload;
      })

  }

})

export const { resetEmailState, resetOtpState } = settingSlice.actions;
export default settingSlice.reducer;