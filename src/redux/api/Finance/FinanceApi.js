import API from "../../../../config/api";

// Get payment data (cards for finance overview)
export const getPaymentsData = async () => {
  const provider_id = localStorage.getItem("provider_id");
  const response = await API.post('/provider/payments-data', {
    provider_id: provider_id
  });
  // console.log('getPaymentsData', response.data);
  return response.data;
};

// get payment transaction  (table for finance overview)
export const getTransactionsOverview = async ()=>{
  const response = await API.get('/provider/service-payments')
  return response.data

}

// get taxes data (cards for finance taxes)
export const getTaxesData = async () =>{
  const response = await API.get('/provider/getTransactionsData')
  return response.data
}

