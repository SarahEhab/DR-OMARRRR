// eldersSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  eldersData: [],
 eldersOne:{},
  isLoading: false,
  error: null,
};

 const getElders = createAsyncThunk('get/elders', async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      'https://tsquarehost.info/public/api/Elders/Get');
      
    return response.data;
  } catch (error) {
    return error
  }
});


const getEldersById = createAsyncThunk('post/elders/id', async (id, thunkAPI) => {
  try {

    const response = await axios.post(
      `https://tsquarehost.info/public/api/Elders/Get_Audio_Id_Elder?id=${id}`);
    return response.data;
  } catch (error) {
    return error
  }
});



const eldersSlice = createSlice({
  name: 'eldersData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getElders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getElders.fulfilled, (state, action) => {
        state.eldersData = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getElders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
	  
	  
      .addCase(getEldersById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getEldersById.fulfilled, (state, action) => {
        state.eldersOne = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getEldersById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
	  
	  
	  }}
      );
export { getElders,getEldersById };

export default eldersSlice.reducer;