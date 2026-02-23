import API from "../../../../config/api"


export const getBookings = async(page = 1)=>{
  const response = await API.get(`/provider/bookings?page=${page}`)
  return response.data
}