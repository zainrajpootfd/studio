import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />

      <main className="px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
