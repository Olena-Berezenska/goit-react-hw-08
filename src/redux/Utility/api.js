import axios from 'axios';

export const goitAPI = axios.create({
  baseURL: 'https://connections-api.goit.global',
});
