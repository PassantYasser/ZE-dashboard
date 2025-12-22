const { createSlice } = require("@reduxjs/toolkit")








const initialState={
  finance:[],
}

const FinanceSlice = createSlice({
  name:'Finance',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder 

  }
})

export default FinanceSlice.reducer