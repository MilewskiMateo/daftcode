import React, { useState } from "react";
import BenefitsSection from "../components/BenefitsSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import StatisticsSection from "../components/StatisticsSection";
import VideoSection from "../components/VideoSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const BenefitsImages=[require("../images/Frame@2x.svg").default,require("../images/Frame@2x-1.svg").default,require("../images/Frame@2x-2.svg").default]
  const BenefitsAlts=["Siting girl","watering flowers","Guy working on laptop"]
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} img={require("../images/Logo.svg").default} alt="Logo"  />
      <HeroSection id="home" img={require("../images/hero img@2x.svg").default} alt="book reading girl" SygnetImg={require("../images/logo_sygnet.svg").default} SygnetAlt="Car"/>
      <StatisticsSection id="about" />
      <VideoSection id="courses"  img={require("../images/video_image.png").default} alt="company presenting video"/>
      <BenefitsSection id="news"  images={BenefitsImages} alts={BenefitsAlts}/>
      <Footer id="contact"  img={require("../images/Logo@2x.svg").default} alt="company presenting video" />
    </>
  );
};

export default Home;
