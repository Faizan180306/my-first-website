import React from 'react';
import { createRoot } from 'react-dom/client';   // ✅ Correct import for React 18
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';  // ✅ Path should match your CSS file


const container = document.getElementById('root');
const root = createRoot(container);  // ✅ Create root for React 18

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
