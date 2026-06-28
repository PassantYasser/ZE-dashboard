import API from "../../../../config/api"


export const getCategories = async()=>{
  const response = await API.get('/provider/menu-categories')
  return response.data
}


export const getItems = async()=>{
  const response = await API.get('/provider/menu-items')
  return response.data
}