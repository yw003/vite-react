import React, { lazy } from "react";
// import Home from "../views/Home/index";
// import About from "../views/About";
//懒加载
const About = lazy(() => import("../views/About"));
const Home = lazy(() => import("../views/Home"));
const Page301 = lazy(() => import("../views/page301"));
/*
懒加载的模式的组件的写法，外层需要套一层loading的提示加载组件
*/
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading....</div>}>{comp}</React.Suspense>
);
//重定向
import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: <Navigate to="/page1"></Navigate>,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        // element: <About></About>,
        element: withLoadingComponent(<About />),
      },
      {
        path: "/page3/page301",
        // element: <About></About>,
        element: withLoadingComponent(<Page301 />),
      },
    ],
  },
  //   {
  //     path: "/about",
  //     // element: <About></About>,
  //     element: withLoadingComponent(<About />),
  //   },
];
export default routes;
