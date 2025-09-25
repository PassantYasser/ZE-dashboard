import API from "../../../../config/api"

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
  console.log("response.data:", response.data);

  return  response.data
}