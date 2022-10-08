import React, { Component } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
// pages
import Home from "./components/pages/homePage";
import ProductPage from "./components/productPage/productPage";
import ComputerPage from "./components/pages/computer";
import BasketPage from "./components/pages/basket";
import AdminPage from "./components/pages/admin-page";
class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selectProduct/:id" element={<ProductPage />} />
          <Route path="/computer" element={<ComputerPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/adminPage" element={<AdminPage />} />
        </Routes>
      </>
    );
  }
}
export default App;
