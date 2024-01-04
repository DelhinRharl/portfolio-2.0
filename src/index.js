import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.scss';
import './styles/_navbar.scss';
import './styles/_photo.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
