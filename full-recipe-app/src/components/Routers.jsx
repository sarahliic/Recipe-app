import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Cuisine from "../Pages/Cuisine";
import Searched from "../Pages/Searched";
import Recipe from "../Pages/Recipe";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cuisine/:type" element={<Cuisine />} />
        <Route path="/Searched/:search" element={<Searched />} />
        <Route path="/Recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default Routers;
