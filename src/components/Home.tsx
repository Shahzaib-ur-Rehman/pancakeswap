import React from "react";
import Footer from "./Footer";
import ConnectWallet from "./ConnectWallet";
import Banner from "./Banner";
import BuyCake from "./BuyCake";
export default function Home() {
  return (
    <div>
      <Banner />
      <BuyCake />
      <ConnectWallet />
      <Footer />
    </div>
  );
}
