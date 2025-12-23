import { getPaymentsData, getTaxesData, getTransactionsOverview, getTransactionsTaxes } from "@/redux/api/Finance/FinanceApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Get payments data (finance cards)
export const getPaymentsDataThunk = createAsyncThunk(
  'finance/getPaymentsData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPaymentsData();
      // console.log('getPaymentsDataThunk', response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch finance data");
    }
  }
);

// get payment transaction  (table for finance overview)
export const getTransactionsOverviewThunk = createAsyncThunk(
  'finance/getTransactionsOverviewThunk' ,
  async(page = 1 , {rejectWithValue})=>{
    try{
      const response = await getTransactionsOverview(page)
      // console.log('getTransactionsOverviewThunk' , response);
      return {
        payments: response.payments,
        pagination: response.pagination
      }
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to fetch finance data");
    }
  }
)

export const getTaxesDataThunk = createAsyncThunk(
  'finance/getTaxesDataThunk' ,
    async(_ ,{rejectWithValue})=>{
      try{
        const response = await getTaxesData()
        // console.log('getTaxesDataThunk' , response.data);
        return response.data
      }catch(error){
        return rejectWithValue(error.response?.data || "Failed to fetch finance data");
      }
    }
)

export const getTransactionsTaxesThunk = createAsyncThunk(
  'finance/getTransactionsTaxesThunk' ,
  async(page = 1 ,{rejectWithValue})=>{
    try{
      const response = await getTransactionsTaxes(page)
      console.log('getTransactionsTaxesThunk' , response.taxes);
      return {
        taxes: response.taxes,
        pagination: response.pagination
      }
    }catch(error){
      return rejectWithValue(error.response?.data || "Failed to fetch finance data");
    }
  }
)


const initialState = {
  paymentsData: null,
  TransactionsData:[],
  TransactionsPagination: null,
  TaxesData:null,
  TaxesTransactionsData:[],
  TaxesPagination: null,
  loading: false,
  error: null,
};

const FinanceSlice = createSlice({
  name: 'Finance',
  initialState,
  reducers: {
    resetFinance: (state) => {
      state.paymentsData = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Payments Data
      .addCase(getPaymentsDataThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPaymentsDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentsData = action.payload;
      })
      .addCase(getPaymentsDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get payment transaction  (table for finance overview)
      .addCase(getTransactionsOverviewThunk.pending , (state)=>{
        state.loading = true ;
        state.error = null;
      })
      .addCase(getTransactionsOverviewThunk.fulfilled , (state , action)=>{
        state.loading = false;
        state.TransactionsData = action.payload.payments;
        state.TransactionsPagination = action.payload.pagination;
      })
      .addCase(getTransactionsOverviewThunk.rejected , (state , action)=>{
        state.loading = false;
        state.error = action.payload;
      })
      // get taxes data (cards for finance taxes)
      .addCase(getTaxesDataThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTaxesDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.TaxesData = action.payload;
      })
      .addCase(getTaxesDataThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
// get taxes transaction  (table for finance taxes)
    .addCase(getTransactionsTaxesThunk.pending , (state)=>{
        state.loading = true ;
        state.error = null;
      })
      .addCase(getTransactionsTaxesThunk.fulfilled , (state , action)=>{
        state.loading = false;
        state.TaxesTransactionsData = action.payload.taxes;
        state.TaxesPagination = action.payload.pagination;
      })
      .addCase(getTransactionsTaxesThunk.rejected , (state , action)=>{
        state.loading = false;
        state.error = action.payload;
      })
  }
});

export const { resetFinance } = FinanceSlice.actions;
export default FinanceSlice.reducer;