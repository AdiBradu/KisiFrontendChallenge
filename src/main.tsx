import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// styles
import './styles/reset.scss';
import './styles/variables.scss';
import './styles/typography.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
