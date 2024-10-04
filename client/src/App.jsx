import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/layout.jsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import FallBackUI from "./components/FallBackUI/FallBackUI.jsx";

// Lazy load components
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const SinglePage = lazy(() => import("./pages/SinglePage/SinglePage.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage.jsx"));
const ListPage = lazy(() => import("./pages/ListPage/ListPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));

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
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return (
    <ErrorBoundary>
      <Suspense fallback={ <FallBackUI /> } >
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
