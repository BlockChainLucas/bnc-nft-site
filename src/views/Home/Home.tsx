import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Roadmap from "./components/Roadmap/Roadmap";
import Mint from "./components/Mint/Mint";
import Buy from "./components/Buy/Buy";
import FAQS from "./components/FAQS/FAQS";
import Footer from "./components/Footer/Footer";
import ModalLogin from "./components/Modal/ModalLogin";
import ModalLogout from "./components/Modal/ModalLogout";

const Home: React.FC = () => {
  const userMsg = useSelector((state: any) => state.user);
  
  return (
    <div>
      <Header />
      <About />
      <Roadmap />
      <Mint />
      <Buy />
      <FAQS />
      <Footer />
      {userMsg?.loginoutModal === "login" && <ModalLogin />}
      {userMsg?.loginoutModal === "logout" && <ModalLogout />}
    </div>
  );
};
export default Home;
