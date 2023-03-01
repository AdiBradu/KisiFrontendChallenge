import React from 'react';
// styles
import './App.css';
// key generator
import uniqid from 'uniqid';
// routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
// react query
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <main className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {publicRoutes.map((route) => (
              <Route key={uniqid()} element={route.element} path={route.path} />
            ))}
          </Routes>
        </Router>
      </QueryClientProvider>
    </main>
  );
};
