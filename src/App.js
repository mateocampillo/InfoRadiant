import React from 'react';
import './App.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import {
  Sidebar,
  MenuSidebar,
  Home,
  PlayerTitles,
  Rangos,
  Sprays
} from './Components';
import {
  AppWrapper
} from './Components/Elements/Elements';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/player-titles",
    element: <PlayerTitles />
  },
  {
    path: "/rangos",
    element: <Rangos />
  },
  {
    path: "/sprays",
    element: <Sprays />
  }
]);

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Sidebar />
        <MenuSidebar />
        <RouterProvider router={router} />
      </AppWrapper>
    </div>
  );
}

export default App;
