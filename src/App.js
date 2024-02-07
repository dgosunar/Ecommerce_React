import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import MyOrders from './pages/MyOrders';
import SignIn from './pages/SignIn';
import LogIn from './pages/LogIn';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const AppRoutes = () => {

  let routes = useRoutes([
    { path: "/Look_Buy/", element: <Home /> },
    { path: "/Look_Buy/MyOrders", element: <MyOrders /> },
    { path: "/Look_Buy/SignIn", element: <SignIn /> },
    { path: "/Look_Buy/LogIn", element: <LogIn /> },
    { path: "/Look_Buy/Contact", element: <Contact /> },
    { path: "/Look_Buy/*", element: <NotFound /> }
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
