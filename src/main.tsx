import React from "react";
import ReactDOM from "react-dom/client";
//样式初始化
import "reset-css";
//全局样式
import "@/assets/styles/global.scss";
import App from "./App.tsx";
// import './index.css'
import { BrowserRouter } from "react-router-dom";
//状态管理
import { Provider } from "react-redux";
import store from './store'
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/*<React.StrictMode>*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);
