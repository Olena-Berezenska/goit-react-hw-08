import axios from 'axios';
import { goitAPI } from './api';

export const setAuthHeader = token => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthHeader = () => {
  delete goitAPI.defaults.headers.common.Authorization;
};
