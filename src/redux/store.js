import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filters/slice';

import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    contactList: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
