import API from "../../../../config/api"

export const changeEmail = async({email})=>{
  const response = await API.post('/provider/changeEmailRequest' , {email})
  console.log('API response:', response.data);
  return response.data
}

export const verifyEmailOtp = async({otp})=>{
  const response = await API.post('/provider/changeEmailOtp' , {otp})
  console.log('Verify OTP response:', response.data);
  return response.data
}