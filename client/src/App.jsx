import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Mosaic } from "react-loading-indicators";
import Layout from "./pages/layout/layout.jsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";

// Lazy load components
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const SinglePage = lazy(() => import("./pages/SinglePage/SinglePage.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage.jsx"));
const ListPage = lazy(() => import("./pages/ListPage/ListPage.jsx"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return (
    <ErrorBoundary>
      <Suspense fallback={ <Mosaic color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} />} >
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
