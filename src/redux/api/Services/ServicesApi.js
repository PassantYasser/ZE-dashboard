import API from "../../../../config/api";

export const getAllServices = async () => {
  const response = await API.get("/provider/services");
  return response.data; 
};