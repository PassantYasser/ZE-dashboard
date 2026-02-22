import API from "../../../../config/api"


export const getBookings = async()=>{
  const response = await API.get('/provider/bookings')
  return response.data
}