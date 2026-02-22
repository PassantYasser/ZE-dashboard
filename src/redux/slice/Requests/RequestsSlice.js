import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
  loading: false,
  error: null,
}

const RequestsSlice = createSlice({
  name:'Requests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder 

  }
})

export default RequestsSlice.reducer;