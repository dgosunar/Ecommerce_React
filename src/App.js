import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './styles/App.css';

const AppRoutes = () => {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/*", element: <NotFound /> }
  ])
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
export default App;
