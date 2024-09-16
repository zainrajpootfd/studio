import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

function AppLayout() {
  return (
    <div>
      <Header />

      <main className="px-8 xl:px-20 md:px-10">
        <Outlet />
      </main>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default AppLayout;
