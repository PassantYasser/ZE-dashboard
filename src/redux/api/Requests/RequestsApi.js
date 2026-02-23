import API from "../../../../config/api"


export const getBookings = async({ page = 1, status, date_from, date_to } = {})=>{
  const params = new URLSearchParams()
  params.append('page', page)
  if (status) params.append('status', status)
  if (date_from) params.append('date_from', date_from)
  if (date_to) params.append('date_to', date_to)
  const response = await API.get(`/provider/bookings?${params.toString()}`)
  return response.data
}