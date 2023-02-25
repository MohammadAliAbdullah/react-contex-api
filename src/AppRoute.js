import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ChatPage from "./components/ChatPage";
import Login from "./components/Login";
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8000');

const routes = [
    {
        element: <ChatPage />,
        children: [
            {
                path: "/chat",
                element: <ChatPage />,
                layout: "/admin",
            }
        ]
    },
    {
      element: <Login />,
      children: [
          {
              path: "/",
              element: <Login />,
              layout: "/",
          }
      ]
  }
]

function App() {
  const routers = createBrowserRouter(routes);
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;