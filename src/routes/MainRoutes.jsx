import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../components/Product";
import Home from "../components/Home";
import AddProduct from "../components/AddProduct";
import Basket from "../components/Basket";
import CategoryProd from "../components/CategoryProd";
import Brand from "../components/Brand";
import OrderTelegram from "../components/OrderTelegram";
import DeteilsProduct from "../components/DeteilsProduct";
import Search from "../components/Search";
import Sale from "../components/Sale";

const MainRoutes = () => {
  const routes = [
    {
      id: 1,
      link: "/",
      element: <Home/>,
    },
    {
      id: 2,
      link: "/product",
      element: <Product />,
    },
    {
        id: 3,
        link: "/addProduct",
        element: <AddProduct/>,
      },
      {
        id: 4,
        link: "/basket",
        element: <Basket/>,
      },
      {
        id: 5,
        link: "/category/:categTitle",
        element: <CategoryProd/>,
      },
      {
        id: 6,
        link: "/brand/:brandTitle",
        element: <Brand/>,
      },
      {
        id: 7,
        link: "/orderTg",
        element: <OrderTelegram/>,
      },
      {
        id: 8,
        link: "/deteils",
        element: <DeteilsProduct/>,
      },
      {
        id: 9,
        link: "/search",
        element: <Search/>,
      },
      {
        id: 10,
        link: "/sale",
        element: <Sale/>,
      },
  ];

  return (
    <Routes>
      {routes.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
