// // src/components/About.jsx
// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { motion } from "framer-motion";
// import "../styles/About.css";

// const About = () => {
//   const scrollToContact = () => {
//     const contactSection = document.getElementById("contact");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <motion.section
//       id="about"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.8 }}
//       className="about-section d-flex align-items-center justify-content-center text-center text-md-start"
//       style={{ minHeight: "100vh", position: "relative" }}
//     >
//       {/* Floating Background Shapes */}
//       <div className="floating-shapes">
//         <div className="shape shape-1"></div>
//         <div className="shape shape-2"></div>
//         <div className="shape shape-3"></div>
//       </div>

//       <Container>
//         <Row className="align-items-center">
//           {/* Profile Image */}
//           <Col md={5} className="mb-5 mb-md-0 d-flex justify-content-center">
//             <motion.img
//               src="https://avatars.githubusercontent.com/u/placeholder"
//               alt="Profile"
//               className="profile-img img-fluid rounded-circle shadow-lg"
//               style={{ maxWidth: "280px" }}
//               whileHover={{ scale: 1.08 }}
//               transition={{ duration: 0.5 }}
//             />
//           </Col>

//           {/* About Content */}
//           <Col md={7}>
//             <motion.div
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="display-4 fw-bold mb-3 text-gradient">
//                 Hello, I'm Omshri 👋
//               </h1>

//               <p className="lead mb-4 text-secondary">
//                 A passionate <strong>Computer Science</strong> student who loves
//                 building modern, beautiful, and user-friendly web applications.
//               </p>

//               <p className="text-muted">
//                 I enjoy solving real-world problems with technology, constantly
//                 learning new skills, and collaborating on innovative projects.
//                 Let's create something amazing together! 🚀
//               </p>

//               {/* Buttons */}
//               <div className="mt-4 d-flex flex-wrap gap-3">
//                 <Button
//                   variant="primary"
//                   className="hero-button px-4 py-2 rounded-pill"
//                   onClick={scrollToContact}
//                 >
//                   View My Work
//                 </Button>
//                 <Button
//                   variant="outline-primary"
//                   className="hero-button px-4 py-2 rounded-pill"
//                   onClick={scrollToContact}
//                 >
//                   Get in Touch
//                 </Button>
//               </div>
//             </motion.div>
//           </Col>
//         </Row>
//       </Container>
//     </motion.section>
//   );
// };

// export default About;
// src/components/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Home.css"; // we will add custom CSS here
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
              A passionate <strong>Computer Science</strong> student who loves
              crafting beautiful, modern, and functional websites.
            </p>
            <p className="text-light mb-4 px-3 hero-description">
              I enjoy solving real-world problems with technology, constantly
              learning new skills, and collaborating on innovative projects.
              Let's create something amazing together! 🚀
            </p>
            <Button
              variant="light"
              href="#contact"
              className="btn-lg px-5 py-3 rounded-pill shadow-sm hero-button"
            >
              Hire Me 🚀
            </Button>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Home;
