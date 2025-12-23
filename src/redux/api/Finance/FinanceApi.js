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
export const getTransactionsOverview = async (page = 1)=>{
  const response = await API.get(`/provider/service-payments?page=${page}`)
  return response.data

}

// get taxes data (cards for finance taxes)
export const getTaxesData = async () =>{
  const response = await API.get('/provider/getTransactionsData')
  return response.data
}

// get taxes transaction  (table for finance taxes)
export const getTransactionsTaxes = async()=>{
  const response = await API.get('/provider/taxes')
  return response.data
}
