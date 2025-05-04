import AppLayout from "../layout/Layout";
import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import NotFound from "../pages/Misc/NotFound";
import Dashboard from "../pages/Menu/Dashboard";
import Product from "../pages/Menu/Product";
// Kiểm tra người dùng đã đăng nhập hay chưa
const RequireAuth = () => {
  // const token = TokenService.getToken()

  // if (!token) {
  //   return <Navigate to="/login" replace />
  // }

  return <Outlet />;
};

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/login",
        element: <React.Suspense>{<Login />}</React.Suspense>,
      },
      {
        path: "/sign-up",
        element: <React.Suspense>{<SignUp />}</React.Suspense>,
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: "/dashboard",
            element: (
              <React.Suspense>
                <Dashboard />
              </React.Suspense>
            ),
          },
        ],
      },
      {
        path: "/products",
        element: (
          <React.Suspense>
            <Product />
          </React.Suspense>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
