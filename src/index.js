import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Rooter } from 'react-router-dom';
import App from './App';

const domRoot = document.getElementById('root');
const root = createRoot(domRoot);

root.render(
  <React.StrictMode>
    <Rooter>
      <App />
    </Rooter>
  </React.StrictMode>,
);
