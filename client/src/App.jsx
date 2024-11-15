import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./pages/layout/mainLayout/mainLayout.jsx";
import { AuthLayout } from "./pages/layout/authLayout/authLayout.jsx"

// Directly leaded compoenents
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import FallBackUI from "./components/FallBackUI/FallBackUI.jsx";
import AuthFallbackUI from "./components/AuthFallbackUI/AuthFallbackUI.jsx"
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";

// Lazy load components
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const SinglePage = lazy(() => import("./pages/SinglePage/SinglePage.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage.jsx"));
const ListPage = lazy(() => import("./pages/ListPage/ListPage.jsx"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
        }
      ],
    }, 
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />
        },
        {
          path: "register",
          element: <RegisterPage />
        },
        // Catch all route to show a fallback UI
        {
          path: "/auth",
          element: <AuthFallbackUI />
        },
        {
          path: "*",
          element: <AuthFallbackUI />
        }
      ]
    }
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
