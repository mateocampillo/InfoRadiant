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
  About,
  Agentes,
  ErrElement
} from './Components';

import {
  AppWrapper
} from './Components/Elements/Elements';

import { ProSidebarProvider } from 'react-pro-sidebar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrElement />
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
  },
  {
    path:"/agentes",
    element: <Agentes />
  }
]);

function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <AppWrapper>
          <Sidebar />
          <MenuSidebar />
          <RouterProvider router={router} />
        </AppWrapper>
      </ProSidebarProvider>
    </div>
  );
}

export default App;
