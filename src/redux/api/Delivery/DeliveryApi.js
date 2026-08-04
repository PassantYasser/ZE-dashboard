import API from "../../../../config/api";

export const getOrders = async () => {
  const response = await API.get(`/provider/food-delivery/delivery-dashboard`);
  return response.data;
}




