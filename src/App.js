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
  Sprays,
  Armas,
  DetalleArma,
  Bundles,
  Buddies,
  Mapas,
  CartasDeJugador,
  About
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
  },
  {
    path: "/armas",
    element: <Armas />
  },
  {
    path: "/detalle",
    element: <DetalleArma />
  },
  {
    path:"/bundles",
    element: <Bundles />
  },
  {
    path:"/buddies",
    element: <Buddies />
  },
  {
    path:"/mapas",
    element: <Mapas />
  },
  {
    path:"/cartas",
    element: <CartasDeJugador />
  },
  {
    path:"/about",
    element: <About />
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
