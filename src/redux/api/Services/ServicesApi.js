import API from "../../../../config/api";

export const getAllServices = async (params = {}) => {
  const response = await API.get("/provider/services", {
    params: params,
  });
  return response.data; 
};

// Get service by ID(Details & Evaluation)
export const getServiceById = async (service_id) => {
  const response = await API.get(`/provider/services/${service_id}`);
  return response.data;
};

// Get service by ID(Analysis)
export const getServiceAnalysisById = async (service_id) => {
  const response = await API.get(`/provider/service-analysis/${service_id}`);
  return response.data;
}

/**Add service list**/
// Get modules
export const getmodules = async()=>{
  const response = await API.post('/getModules');
  return response.data.modules;
};

// Get categories
export const getCategories = async(module_id)=>{
  const response = await API.post('/getCategories' , { module_id });
  return response.data.categories;
};

//Get areas
export const getAllAreas = async()=>{
  const response = await API.get('/provider/getAllAreas')
  return response.data
}
/******************* */

//add service 
export const AddService = async (formData) => {
  const response = await API.post('/provider/services', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  // console.log('AddService',response.data);
  return response.data;
}

//update service by id 
export const updateService = async (service_id , formData)=>{
  const response = await API.post(`/provider/services/${service_id}` ,formData , {
      headers: { 'Content-Type': 'multipart/form-data' },
  } );
  console.log('updateService',response.data);
  return response.data
}

//delete service
export const deleteService = async (service_id) => {
  const response = await API.delete(`/provider/services/${service_id}`);
  return response.data;
};