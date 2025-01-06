import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { About } from "./Components/About";
// import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";

// Header
// -Logo
// -NavItems
// Body
// -resto-Card
// Footer

const Contact = lazy(() => import("./Components/Contact"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
{
  path: "/",
  element:<AppLayout />,
  children: [
    {
      path: "/",
      element:<Body />
    },
    {
      path: "/about",
      element:<About />
    },
    {
      path: "/contact",
      element:<Suspense fallback={<h1>Loading.....</h1>}><Contact /></Suspense>
    },
    {
      path: "/restaurants/:resId",
      element:<RestaurantMenu />
    }
  ],
  errorElement:<Error />,

},

])
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
