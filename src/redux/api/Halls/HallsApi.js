import API from "../../../../config/api"


export const getHalls = async()=>{
  const response = await API.get('/provider/hall')
  return response.data;
}