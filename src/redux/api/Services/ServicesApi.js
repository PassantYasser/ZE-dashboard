import API from "../../../../config/api";

export const getAllServices = async (page = 1, per_page = 10) => {
  const response = await API.get("/provider/services", {
    params: { page, per_page },
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
  console.log('getmodules' ,response.data );
  return response.data;
}
