import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter as Router, } from 'react-router-dom';
import './assets/css/index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>
);
