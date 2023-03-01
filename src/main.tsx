import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// styles
import './styles/reset.css';
import './styles/variables.css';
import './styles/typography.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
