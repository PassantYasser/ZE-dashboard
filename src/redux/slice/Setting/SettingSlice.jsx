import { changeEmail, changePhone, getProfile, verifyEmailOtp, verifyPhoneOtp } from "@/redux/api/Setting/SettingApi";
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

export const changePhoneThunk = createAsyncThunk('setting/changePhoneThunk' , 
  async(formData , {rejectWithValue})=>{
    try{
      const response = await changePhone(formData)
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to change phone");
    }
  }
)

export const verifyPhoneOtpThunk = createAsyncThunk('setting/verifyPhoneOtp' , 
  async(otp , {rejectWithValue})=>{
    try{
      const response = await verifyPhoneOtp(otp)
      console.log('verifyPhoneOtpThunk' ,response );
      return response 
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to verify OTP");
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
  successPhone:false,
  otpPhoneVerified: false,
  otpPhoneLoading: false,
  otpPhoneError: null,
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
    resetPhoneState: (state) => {
      state.successPhone = false;
      state.loading = false;
      state.error = null;
    },
    resetPhoneOtpState: (state) => {
      state.otpPhoneVerified = false;
      state.otpPhoneLoading = false;
      state.otpPhoneError = null;
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
      //
      .addCase(changePhoneThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePhoneThunk.fulfilled, (state) => {
        state.loading = false;
        state.successPhone = true;
      })
      .addCase(changePhoneThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //
      .addCase(verifyPhoneOtpThunk.pending, (state) => {
        state.otpPhoneLoading = true;
        state.otpPhoneError = null;
      })
      .addCase(verifyPhoneOtpThunk.fulfilled, (state) => {
        state.otpPhoneLoading = false;
        state.otpPhoneVerified = true;
      })
      .addCase(verifyPhoneOtpThunk.rejected, (state, action) => {
        state.otpPhoneLoading = false;
        state.otpPhoneError = action.payload;
      })

  }

})

export const { resetEmailState, resetOtpState ,resetPhoneState ,resetPhoneOtpState } = settingSlice.actions;
export default settingSlice.reducer;