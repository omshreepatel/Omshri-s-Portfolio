import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Home.css";
import profileImage from "../components/profile.jpeg";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="home-section"
    >
      <Container
        className="d-flex align-items-center justify-content-center text-center"
        style={{ minHeight: "90vh" }}
      >
        <Row>
          <Col md={12}>
            <motion.img
              src={profileImage}
              alt="Profile"
              className="profile-img img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: "280px" }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />

            <h1 className="display-3 fw-bold mb-3 hero-title">
              Hello, I'm <span className="text-gradient">Omshri</span> 👋
            </h1>
            <p className="lead text-light mb-4 px-3 hero-subtitle">
              A passionate <strong>Computer Science graduate</strong> preparing
              to join <strong>TCS</strong> as a <strong>System Engineer</strong>
              , who loves crafting beautiful, modern, and functional websites.
            </p>
            <p className="text-light mb-4 px-3 hero-description">
              I enjoy solving real-world problems with technology, constantly
              learning new skills, and collaborating on innovative projects.
              Let's create something amazing together! 🚀
            </p>
            <div className="button-layout">
              <Button
                variant="light"
                href="#contact"
                className="btn-lg px-5 py-3 rounded-pill shadow-sm hero-button"
              >
                Hire Me 🚀
              </Button>

              {/* <div className="small-buttons-right">
                <Button href="#internship" className="btn-custom">
                  Internship Exp. 🚀
                </Button>
                <Button href="#certifications" className="btn-custom">
                  Certification 🚀
                </Button>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Home;
