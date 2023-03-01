import React from 'react';
// styles
import './App.css';
// key generator
import uniqid from 'uniqid';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={uniqid()} element={route.element} path={route.path} />
          ))}
        </Routes>
      </Router>
    </div>
  );
};
