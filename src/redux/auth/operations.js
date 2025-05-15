import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader, removeAuthHeader } from '../Utility/apiToken';

import { goitAPI } from '../Utility/api';

export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post(`/users/signup`, body);
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      setAuthHeader(response.data.token);
      console.log(goitAPI.defaults.headers.common.Authorization);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  console.log('LOGIN ЗАПУЩЕНО');
  try {
    const response = await goitAPI.post(`/users/login`, body);
    localStorage.setItem('token', response.data.token);
    setAuthHeader(response.data.token);
    console.log(goitAPI.defaults.headers.common.Authorization);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    console.log(
      'Authorization перед логаутом:',
      goitAPI.defaults.headers.common.Authorization
    );
    await goitAPI.post(`/users/logout`);
    removeAuthHeader();
    console.log(
      'Authorization після логауту:',
      goitAPI.defaults.headers.common.Authorization
    );
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return thunkAPI.rejectWithValue('No token');

      setAuthHeader(token);

      const response = await goitAPI.get(`/users/current`);
      return { user: response.data, token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
