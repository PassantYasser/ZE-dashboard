import API from "../../../../config/api";

export const getAllServices = async (page = 1, per_page = 10) => {
  const response = await API.get("/provider/services", {
    params: { page, per_page },
  });
  return response.data; 
};