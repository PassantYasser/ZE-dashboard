const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name:null,
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{

  }
})

// export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
