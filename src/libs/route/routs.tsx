/* eslint-disable no-restricted-imports */
import {
    createBrowserRouter,
  } from "react-router-dom";

import { NotFound404 } from "../../core/404";
import { EventsList } from "../../core/events-list";
import { Layout } from "../../core/layout/layout";
  
 export const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      {
      path: "/",
      element: <EventsList />,
      },
      {
        path: '*',
        element: <NotFound404 />,
      },
    ],
  }
]);