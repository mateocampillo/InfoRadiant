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
