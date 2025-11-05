import { getAllAreas, getAllServices, getCategories, getmodules, getServiceAnalysisById, getServiceById } from "@/redux/api/Services/ServicesApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get all services
export const getAllServicesThunk = createAsyncThunk(
  "services/getAll",
  async ({ page = 1, per_page = 10 }, { rejectWithValue }) => {
    try {
      const data = await getAllServices(page, per_page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// get specific service of (Details &Evaluation)
export const getServiceByIdThunk = createAsyncThunk(
  "services/getById",
  async (service_id, { rejectWithValue }) => {
    try {
      const data = await getServiceById(service_id);
      console.log("slice data", data);
      return data.service;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// get specific service of (Analysis)
export const getServiceAnalysisByIdThunk = createAsyncThunk(
  "services/getAnalysisById",
  async (service_id, { rejectWithValue }) => {
    try {
      const data = await getServiceAnalysisById(service_id);
      console.log("analysis slice data", data);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
)

/**Add service list**/

export const getmodulesThunk = createAsyncThunk(
  "services/getmodules",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getmodules();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Get categories
export const getCategoriesThunk = createAsyncThunk(
  "services/getCategories",
  async (module_id, { rejectWithValue }) => {   
    try {
      const data = await getCategories(module_id);
      return data;
    }catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    } 
  }
);

export const getAllAreasThunk = createAsyncThunk(
  'services/getAllAreasThunk',
    async(_,{rejectWithValue})=>{
      try{
        const response = await getAllAreas();
        return response
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      } 
    }
)


const initialState = {
    services: [],
    pagination: null,
    service: null,
    serviceAnalysis: null,
    getmodules: null,
    getCategories: null,
    getAreas : null,

    loadingList: false, 
    loadingDetails: false,  
    errorList: null,
    errorDetails: null,
  };

const servicesSlice = createSlice({
  name: "services",
  initialState:initialState,
  reducers: {
    clearService: (state) => {
      state.service = null; // optional clear on dialog close
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ All Services
      .addCase(getAllServicesThunk.pending, (state) => {
        state.loadingList = true;
        state.errorList = null;
      })
      .addCase(getAllServicesThunk.fulfilled, (state, action) => {
        state.loadingList = false;
        state.services = action.payload.services || action.payload;
        state.pagination = action.payload.pagination || null;
      })
      .addCase(getAllServicesThunk.rejected, (state, action) => {
        state.loadingList = false;
        state.errorList = action.payload;
      })

      // ✅ Single Service(Details &Evaluation)
      .addCase(getServiceByIdThunk.pending, (state) => {
        state.loadingDetails = true;
        state.errorDetails = null;
      })
      .addCase(getServiceByIdThunk.fulfilled, (state, action) => {
        state.loadingDetails = false;
        state.service = action.payload;
      })
      .addCase(getServiceByIdThunk.rejected, (state, action) => {
        state.loadingDetails = false;
        state.errorDetails = action.payload;
      })

      // ✅ Single Service(Analysis)
      .addCase(getServiceAnalysisByIdThunk.pending, (state) => {
        state.loadingDetails = true;
        state.errorDetails = null;
      })
      .addCase(getServiceAnalysisByIdThunk.fulfilled, (state, action) => {
        state.loadingDetails = false;
        state.serviceAnalysis = action.payload;
      })
      .addCase(getServiceAnalysisByIdThunk.rejected, (state, action) => {
        state.loadingDetails = false;
        state.errorDetails = action.payload;
      })

      // ✅ Get modules
      .addCase(getmodulesThunk.pending, (state) => {
        state.loadingDetails = true;
        state.errorDetails = null;
      })
      .addCase(getmodulesThunk.fulfilled, (state, action) => {
        state.loadingDetails = false;
        state.getmodules = action.payload;
      })
      .addCase(getmodulesThunk.rejected, (state, action) => {
        state.loadingDetails = false;
        state.errorDetails = action.payload;
      })

      // ✅ Get categories
      .addCase(getCategoriesThunk.pending, (state) => {
        state.loadingDetails = true;
        state.errorDetails = null;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.loadingDetails = false;
        state.getCategories = action.payload;
      }
      )
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.loadingDetails = false;
        state.errorDetails = action.payload;
      })

      // ✅ Get areas
      .addCase(getAllAreasThunk.pending, (state) => {
        state.loadingList = true;
        state.errorList = null;
      })
      .addCase(getAllAreasThunk.fulfilled, (state, action) => {
        state.loadingList = false;
        state.getAreas = action.payload
      })
      .addCase(getAllAreasThunk.rejected, (state, action) => {
        state.loadingList = false;
        state.errorList = action.payload;
      })


  },
});

export const { clearService } = servicesSlice.actions;
export default servicesSlice.reducer;
