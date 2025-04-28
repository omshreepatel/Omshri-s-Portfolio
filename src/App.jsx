// src/App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
// import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Internship from "./components/Internship";
// import Certifications from "./components/Certifications";
// import Family from "./components/Family";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <Router>
      {isAdminLoggedIn ? (
        // 👉 Agar Admin login ho gaya hai toh sirf AdminPanel dikhao
        <AdminPanel />
      ) : (
        <>
          <Navbar />
          <div style={{ paddingTop: "70px" }}>
            <section id="home">
              <Home />
            </section>

            {/* <section id="about">
              <About />
            </section> */}

            <section id="projects">
              <Projects />
            </section>

            <section id="skills">
              <Skills />
            </section>

            {/* <section id="internship">
              <Internship />
            </section>

            <section id="certifications">
              <Certifications />
            </section>

            <section id="family">
              <Family />
            </section> */}

            <section id="contact">
              <Contact />
            </section>

            {/* ✅ AdminLogin form sab sections ke baad */}
            <section id="admin-login">
              <AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />
            </section>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
