import API from "../../../../config/api"


export const getBookings = async({ page = 1, status, date_from, date_to, city, service_id } = {})=>{
  const params = new URLSearchParams()
  params.append('page', page)
  if (status) params.append('status', status)
  if (date_from) params.append('date_from', date_from)
  if (date_to) params.append('date_to', date_to)
  if (city) params.append('city', city)
  if (service_id) params.append('service_id', service_id)
  const response = await API.get(`/provider/bookings?${params.toString()}`)
  return response.data
}

export const getDrowpdownFilters = async()=>{
  const response = await API.get('/provider/getFilters')
  return response.data
}