import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import YourLiquidity from "./components/YourLiquidity";
import AddLiquidity from "./components/AddLiquidity";
import Swap from "./components/Swap";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Swap" element={<Swap />} />
          <Route path="/YourLiquidity" element={<YourLiquidity />} />
          <Route path="/AddLiquidity" element={<AddLiquidity />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
