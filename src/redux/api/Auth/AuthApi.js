import API from "../../../../config/api"

export const login = async(FormData)=>{
  const response = await API.post('/provider/login',FormData)
  return response.data
}