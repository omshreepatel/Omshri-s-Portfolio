// src/components/Navbar.jsx
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";
import ResumeButton from "./ResumeButton";
import "./NavbarStyles.css";
import { Link } from "react-scroll"; // Import from react-scroll

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-name">
          Omshri<span className="highlight">'s</span> Portfolio
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler-custom"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-4">
            {[
              { link: "#home", label: "Home" },
              // { link: "#about", label: "About" },

              { link: "#projects", label: "Projects" },
              { link: "#skills", label: "Skills" },
              { link: "#contact", label: "Contact" },
            ].map((item, index) => (
              <Nav.Link
                key={index}
                href={item.link}
                className="nav-link-custom"
              >
                {item.label}
              </Nav.Link>
            ))}
            <ThemeToggle />
            <div className="ms-3">
              <ResumeButton />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
