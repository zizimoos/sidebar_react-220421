import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/statistics"} element={<h1>STATISTICS</h1>} />
        <Route path={"/customers"} element={<h1>CUSTOMERS</h1>} />
        <Route path={"/diagrams"} element={<h1>DIAGRAMS</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
