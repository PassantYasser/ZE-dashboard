import API from "../../../../config/api"

export const setModuleId = async(module_id)=>{
  const response = await API.post('/provider/assign_module' , {module_id} )
  return response.data
} 