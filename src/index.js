import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Error401 from "./pages/Error401/Error401";
import Error404 from "./pages/Error404/Error404";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/error-401" element={<Error401 />} />
        <Route exact path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
