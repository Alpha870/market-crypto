import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pag404 from "./components/Pag404/Pag404";
import Lista from "./components/Lista/Lista";
import App from "./App";
import Home from "./components/Inicio/Home";
import CriptoPage from "./components/CriptoPage/CriptoPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/criptomonedas" element={<App />}>
          <Route index element={<Lista />} />
          <Route path=":id" element={<CriptoPage />}/>
        </Route>
        <Route path='*' element={<Pag404 />} />
      </Routes>
    </BrowserRouter>
  </>
);
