import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import About from "../About/About";
import Dashboard from "../Dashboard/Dashboard";
import ProductDetails from "../ProductDetails/ProductDetails";
import Statistics from "../Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/statistics",
    element: <Statistics></Statistics>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/product/:productId",
    element: <ProductDetails></ProductDetails>,
  },
]);
