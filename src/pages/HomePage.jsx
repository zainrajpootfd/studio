import React from "react";
import Home from "../Components/Home";
import Clients from "../Components/Clients";
import Services from "../Components/Services";
import AgencyIntro from "../Components/AgencyIntro";
import HappyClients from "../Components/HappyClients";
import Testimonials from "../Components/Testimonials";

function HomePage() {
  return (
    <>
      <Home />
      <Clients />
      <Services />
      <AgencyIntro />
      <HappyClients />
      <Testimonials />
    </>
  );
}

export default HomePage;
