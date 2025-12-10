import React from 'react';
import { createRoot } from 'react-dom/client';
import { Buffer } from 'buffer';

// Polyfill Buffer for the browser
window.Buffer = window.Buffer || Buffer;

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
