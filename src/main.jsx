import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
);
