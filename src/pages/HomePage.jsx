import React from "react";
import Home from "../Components/Home";
import Clients from "../Components/Clients";
import Services from "../Components/Services";
import AgencyIntro from "../Components/AgencyIntro";

function HomePage() {
  return (
    <>
      <Home />
      <Clients />
      <Services />
      <AgencyIntro />
    </>
  );
}

export default HomePage;
