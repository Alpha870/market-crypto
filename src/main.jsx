import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pag404 from "./components/Pag404/Pag404";
import Lista from "./components/Lista/Lista";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Lista />} />
        </Route>
        <Route path='*' element={<Pag404 />} />
      </Routes>
    </BrowserRouter>
  </>
);
