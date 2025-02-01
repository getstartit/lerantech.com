import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Create the root for rendering
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the App and Header components
root.render(
  <>
    <App />
  </>
);

// For performance measuring
reportWebVitals(console.log); // You can replace this with your own analytics or logger
