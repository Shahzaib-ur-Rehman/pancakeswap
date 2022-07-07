import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import ConnectWallet from "./components/ConnectWallet";
import Banner from "./components/Banner";
import BuyCake from "./components/BuyCake";
import Trade from "./components/Trade";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        {/* <Banner /> */}
        <Trade/>
        <BuyCake />
        <ConnectWallet />
        <Footer />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      </div>
    </Router>
  );
}

export default App;
