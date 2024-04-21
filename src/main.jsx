import "./index.css";

import React from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import HelpLayout from "./layouts/HelpLayout.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import About from "./pages/About";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails.jsx";
import Careers, { careersLoader } from "./pages/careers/Careers.jsx";
import CareersError from "./pages/careers/CareersError.jsx";
import Contact from "./pages/help/Contact.jsx";
import Faq from "./pages/help/Faq.jsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter(
  // createRoutesFromElements(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "help", element: <HelpLayout /> },
        { path: "contact", element: <Contact /> },
        { path: "faq", element: <Faq /> },

        {
          path: "careers",
          element: <Outlet />,
          errorElement: <CareersError />,
          children: [
            { index: true, element: <Careers />, loader: careersLoader },
            {
              path: ":id",
              element: <CareerDetails />,
              loader: careerDetailsLoader,
            },
          ],
        },
      ],
    },
  ]
  // )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
