import React from "react";
import ReactDOM from "react-dom/client";
//样式初始化
import "reset-css";
//全局样式
import "@/assets/styles/global.scss";
import App from "./App.tsx";
// import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // {/* </React.StrictMode> */}
);
