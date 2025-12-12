import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
import { StrictMode } from "react";
import ErrorPage from "./pages/error-page.tsx";
import About from "./pages/about-page.tsx";
import Nav from "./components/nav.tsx";
import Projects from "./pages/projects-page.tsx";
import Blog from "./pages/blog-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
