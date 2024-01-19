import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import routes from "~react-pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
