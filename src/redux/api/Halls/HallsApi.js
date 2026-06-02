import API from "../../../../config/api"


export const getHalls = async()=>{
  const response = await API.get('/provider/hall')
  return response.data;
}

export const getHallType = async()=>{
  const response = await API.get('/provider/hall/type')
  return response.data;
}