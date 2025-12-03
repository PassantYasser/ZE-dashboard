import API from "../../../../config/api"

export  const getAllWorkers = async(page = 1, limit = 10)=>{
  const response = await API.get('/provider/getHandymen',{
    params: { page, limit }
  })
  console.log('response.data', response.data);
  return response.data ;
}