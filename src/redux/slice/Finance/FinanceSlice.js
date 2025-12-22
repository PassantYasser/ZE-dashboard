import { getPaymentsData } from "@/redux/api/Finance/FinanceApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Get payments data (finance cards)
export const getPaymentsDataThunk = createAsyncThunk(
  'finance/getPaymentsData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPaymentsData();
      console.log('getPaymentsDataThunk', response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch finance data");
    }
  }
);

const initialState = {
  paymentsData: null,
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
      });
  }
});

export const { resetFinance } = FinanceSlice.actions;
export default FinanceSlice.reducer;