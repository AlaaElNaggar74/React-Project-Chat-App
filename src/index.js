import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Component/AuthContext/AuthContextApi';
import { GlobalValueProvider } from './connnnn/ContextApiiiii';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalValueProvider>
        <AuthContextProvider>
    <App />
    </AuthContextProvider>
      </GlobalValueProvider>
    </BrowserRouter>

  </React.StrictMode>
);

