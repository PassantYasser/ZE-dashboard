import API from "../../../../config/api"

export const getEarnings = async()=>{
  const response = await API.get(`/provider/parcel/company/earnings`)
  return response.data
}