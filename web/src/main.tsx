import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Importação correta do App

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
