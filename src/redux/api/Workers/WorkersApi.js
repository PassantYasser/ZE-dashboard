import API from "../../../../config/api"

//get all worker
export  const getAllWorkers = async(page = 1, limit = 10)=>{
  const response = await API.get('/provider/getHandymen',{
    params: { page, limit }
  })
  return response.data ;
}

//get designations 
export const getDesignations = async()=>{
  const response = await API.get('/designations')
  return response.data.data

}

//add new worker
export const addWorker = async(formData)=>{
  const response = await API.post('/createHandyman',formData,{
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  console.log('addWorker' ,  response.data);
  return response.data;
}

//get worker by ID
export const getWorkerById = async(worker_id)=>{
  const response = await API.get(`/provider/handyman/${worker_id}`)
  console.log(response.data);
  return response.data;
}