import React from "react";
import Footer from "./Footer";
import ConnectWallet from "./ConnectWallet";
import Banner from "./Banner";
import BuyCake from "./BuyCake";
import Trade from "./Trade";
import TrustedUsers from "./TrustedUsers";
import WinPrices from "./WinPrices";
import EarnPassiveEncome from "./EarnPassiveEncome";
import Header from "./Header";
export default function Home() {
  return (
    <div>
      <Banner />
      <TrustedUsers />
      <Trade />
      <EarnPassiveEncome />
      <WinPrices />
      <BuyCake />
      <ConnectWallet />
      <Footer />
    </div>
  );
}
