import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { persistor, store } from './store/store';

import './index.scss';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
