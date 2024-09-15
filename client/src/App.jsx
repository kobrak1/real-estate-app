import Layout from "./pages/layout/layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SinglePage from "./pages/SinglePage/SinglePage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import ListPage from "./pages/ListPage/ListPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
          element: <ProfilePage />
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
