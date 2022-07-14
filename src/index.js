import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Rooter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/configureStore';

import App from './App';
import './app.scss';

const domRoot = document.getElementById('root');
const root = createRoot(domRoot);

root.render(
  <React.StrictMode>
    <Rooter>
      <Provider store={store}>
        <App />
      </Provider>
    </Rooter>
  </React.StrictMode>,
);
