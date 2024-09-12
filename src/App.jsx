import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import Services from "./pages/Services/";
import Project from "./pages/Project/";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
// import Header from "./ui/Header"; // Assuming Header contains Navbar
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
