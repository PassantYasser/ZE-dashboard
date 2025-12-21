import { AddService, getAllAreas, getAllServices, getCategories, getmodules, getServiceAnalysisById, getServiceById, updateService, deleteService } from "@/redux/api/Services/ServicesApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get all services
export const getAllServicesThunk = createAsyncThunk(
  "services/getAll",
  async (params, { rejectWithValue }) => {
    try {
      const data = await getAllServices(params);
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

//Get module
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

//Get Areas
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
);

//Add service
export const AddServiceThunk = createAsyncThunk(
  'service/AddServiceThunk',
  async(formData,{rejectWithValue})=>{
    try{
      const response = await AddService(formData)
      console.log('AddServiceThunk' , response);
      return response.data
    }catch(error){
      return rejectWithValue(error.response?.data || error.message);
    }
  }
)

export const updateServiceThunk = createAsyncThunk(
  '/service/updateServiceThunk' , 
  async({ id, formData }, {rejectWithValue})=>{
    try{
      const response = await updateService(id, formData)
      console.log('updateServiceThunk' , response);
      return response
    }catch(error){
      return rejectWithValue(error.response?.data || error.message);
    }
  }
)

export const deleteServiceThunk = createAsyncThunk(
  "services/delete",
  async (service_id, { rejectWithValue }) => {
    try {
      const data = await deleteService(service_id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
    services: [],
    pagination: null,
    service: null,
    serviceAnalysis: null,
    getmodules: null,
    getCategories: null,
    getAreas : null,
    addService:null,

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

      // ✅ Add new service
      .addCase(AddServiceThunk.pending, (state) => {
        state.loadingDetails = true;
        state.errorDetails = null;
      })
      .addCase(AddServiceThunk.fulfilled, (state, action) => {
        state.loadingDetails = false;
        state.addService = action.payload;
      })
      .addCase(AddServiceThunk.rejected, (state, action) => {
        state.loadingDetails = false;
        state.errorDetails = action.payload;
      })

      // ✅ Update service
      .addCase(updateServiceThunk.pending, (state) => {
        state.loadingDetails = true;
        state.errorDetails = null;
      })
      .addCase(updateServiceThunk.fulfilled, (state, action) => {
        state.loadingDetails = false;
        state.service = action.payload; 
      })
      .addCase(updateServiceThunk.rejected, (state, action) => {
        state.loadingDetails = false;
        state.errorDetails = action.payload;
      })

      // ✅ Delete service
      .addCase(deleteServiceThunk.pending, (state) => {
        state.loadingDetails = true;
        state.errorDetails = null;
      })
      .addCase(deleteServiceThunk.fulfilled, (state, action) => {
        state.loadingDetails = false;
        // Optimization: remove from list immediately
        if (state.services) {
           state.services = state.services.filter(s => s.id !== action.meta.arg);
        }
      })
      .addCase(deleteServiceThunk.rejected, (state, action) => {
        state.loadingDetails = false;
        state.errorDetails = action.payload;
      })



  },
});

export const { clearService } = servicesSlice.actions;
export default servicesSlice.reducer;
