import API from "../../../../config/api"

/* ========== AUTH APIs ========== */

// login 
export const login = async(FormData)=>{
  const response = await API.post('/provider/login',FormData)
  return response.data
}

// display who is login
export const getCurrentLogin = async(loginToken)=>{
  const response = await API.get('/provider/me',{
    headers:{
      Authorization:`Bearer ${loginToken}`
    },
  })
  return  response.data
}

/* ========== FORGET PASSWORD APIs ========== */


//Enter email to send otp
export const forgetPassEnterEmail = async({email})=>{
  const response = await API.post('/provider/send-email-otp',{email,'type':'forgot'});
  return response.data;
};

//Enter phone to send otp
export const forgetPassEnterPhone = async({phone})=>{
  const response = await API.post('/provider/forgot-password/send-otp',{phone});
  return response.data;
};

//Verify email otp
export const forgetPassVerifyEmailOtp = async(payload)=>{
  const response = await API.post('/provider/verify-email-otp',payload);
  return response.data;
};

//Verify phone otp
export const forgetPassVerifyPhoneOtp = async(payload)=>{
  const response = await API.post('/provider/forgot-password/verify-otp',payload);
  return response.data;
}

//Reset password
export const resetPassword = async(payload)=>{
  const response = await API.post('/provider/forgot-password/reset',payload);
  return response.data;
} 

// ----------------------------------------------------------------------------------------------------

/* ========== SIGNUP APIs ========== */

export const signup = async(FormData)=>{
  const response = await API.post('/provider/register',FormData)
  return response.data
}


