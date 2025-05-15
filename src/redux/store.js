import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filters/slice';

import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig = {
  key: 'root-auth',
  version: 1,
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    contactList: contactsReducer,
    filter: filterReducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
