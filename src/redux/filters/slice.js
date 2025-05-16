import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
