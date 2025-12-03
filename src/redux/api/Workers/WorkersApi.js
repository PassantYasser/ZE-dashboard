import API from "../../../../config/api"

export  const getAllWorkers = async()=>{
  const response = await API.get('/provider/getHandymen')
  console.log('response.data', response.data);
  return response.data.handymen || []; 
}