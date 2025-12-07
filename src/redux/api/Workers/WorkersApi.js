import API from "../../../../config/api"

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