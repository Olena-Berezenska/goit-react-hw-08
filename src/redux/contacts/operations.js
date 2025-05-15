import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from '../Utility/apiToken';

import { goitAPI } from '../Utility/api';

// export const goitAPI = axios.create({
//   baseURL: 'https://connections-api.goit.global',
// });

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     console.log('Token in fetchContacts:', thunkAPI.getState().auth.token);
//     setAuthHeader(thunkAPI.getState().auth.token);
//     try {
//       const response = await goitAPI.get(`/contacts`);
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    console.log('Token in fetchContacts:', token);
    setAuthHeader(token); // важливо!
    console.log(
      'goitAPI.defaults.headers.common.Authorization:',
      goitAPI.defaults.headers.common.Authorization
    );
    try {
      const response = await goitAPI.get(`/contacts`);
      return response.data;
    } catch (error) {
      console.error('❌ Error in fetchContacts:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI.getState().auth.token);
      const response = await goitAPI.post(`/contacts`, body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      setAuthHeader(thunkAPI.getState().auth.token);
      await goitAPI.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
