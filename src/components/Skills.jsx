import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = {
  frontend: [
    { name: "HTML5 / CSS3", level: 75 },
    { name: "JavaScript", level: 70 },
    { name: "React.js", level: 70 },
  ],
  backend: [
    { name: "Java", level: 75 },
    { name: "Servlets", level: 70 },
    { name: "JDBC", level: 70 },
  ],
  database: [
    { name: "SQL", level: 80 },
    { name: "MySQL", level: 80 },
  ],
  other: [
    { name: "GitHub", level: 70 },
    { name: "Communication Skills", level: 80 },
  ],
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="skills-section"
    >
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold text-gradient display-5">
          My Skills
        </h2>

        {/* Frontend Skills */}
        <h3 className="text-center mb-4 text-primary">Frontend</h3>
        <Row className="g-4">
          {skills.frontend.map((skill, idx) => (
            <Col md={4} key={idx}>
              <div className="skill-card">
                <h5 className="skill-name">{skill.name}</h5>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="progress-label">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Backend Skills */}
        <h3 className="text-center mb-4 text-primary">Backend</h3>
        <Row className="g-4">
          {skills.backend.map((skill, idx) => (
            <Col md={4} key={idx}>
              <div className="skill-card">
                <h5 className="skill-name">{skill.name}</h5>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="progress-label">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Database Skills */}
        <h3 className="text-center mb-4 text-primary">Database</h3>
        <Row className="g-4">
          {skills.database.map((skill, idx) => (
            <Col md={4} key={idx}>
              <div className="skill-card">
                <h5 className="skill-name">{skill.name}</h5>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="progress-label">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Other Skills */}
        <h3 className="text-center mb-4 text-primary">Other Skills</h3>
        <Row className="g-4">
          {skills.other.map((skill, idx) => (
            <Col md={4} key={idx}>
              <div className="skill-card">
                <h5 className="skill-name">{skill.name}</h5>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.level}%` }}
                  >
                    <span className="progress-label">{skill.level}%</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Skills;
