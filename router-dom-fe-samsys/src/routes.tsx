import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booklist from "./pages/Booklist";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/livros" element={< Booklist />} />
      </Routes>
    </BrowserRouter>
  );
}
