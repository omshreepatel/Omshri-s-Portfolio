// src/components/Contact.jsx
import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"; // Import social media icons
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8090/portfolio-backend1/ContactServlet",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData),
        }
      );
      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <Container id="contact" className="contact-section my-5">
      <h2 className="text-center mb-3 text-primary">Contact Me</h2>
      <Card className="shadow-lg border-0 rounded-lg">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                onChange={handleChange}
                placeholder="Enter your name"
                className="border-info"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                onChange={handleChange}
                placeholder="Enter your email"
                className="border-info"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                required
                onChange={handleChange}
                placeholder="Your message"
                className="border-info"
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className="px-4 py-2">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Social Media Section */}
      <div className="social-media mt-5 text-center">
        <h4 className="mb-3">Follow Me</h4>
        <div className="d-flex justify-content-center gap-4">
          <a
            href="https://www.linkedin.com/in/omshri-patel-950545216/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/indian_personality063/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://github.com/omshreepatel"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://x.com/OmshriP82258"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
