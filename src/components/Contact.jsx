// import React, { useState } from "react";
// import { Container, Form, Button, Card } from "react-bootstrap";
// import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa"; // Import social media icons
// import "../styles/Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Get the backend URL from environment variable
//       const backendUrl =
//         import.meta.env.VITE_BACKEND_URL || "http://localhost:8090"; // Fallback to localhost for local dev

//       const response = await fetch(
//         `${backendUrl}/portfolio-backend1/ContactServlet`, // Use the backend URL from .env
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded", // Ensuring correct content type
//           },
//           body: new URLSearchParams(formData), // Send form data using URLSearchParams
//         }
//       );

//       if (response.ok) {
//         const result = await response.json(); // Parse JSON response from the backend
//         if (result.status === "success") {
//           alert("Message sent successfully: " + result.message); // Success message
//         } else {
//           alert("Error: " + result.message); // Failure message
//         }
//       } else {
//         alert("There was an error sending the message.");
//       }
//     } catch (error) {
//       console.error("Error submitting form", error);
//       alert("There was an error submitting your form. Please try again.");
//     }
//   };

//   return (
//     <Container id="contact" className="contact-section my-5">
//       <h2 className="text-center mb-3 text-primary">Contact Me</h2>
//       <Card className="shadow-lg border-0 rounded-lg">
//         <Card.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-4">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 required
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 className="border-info"
//               />
//             </Form.Group>

//             <Form.Group className="mb-4">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 required
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="border-info"
//               />
//             </Form.Group>

//             <Form.Group className="mb-4">
//               <Form.Label>Message</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 name="message"
//                 required
//                 onChange={handleChange}
//                 placeholder="Your message"
//                 className="border-info"
//               />
//             </Form.Group>

//             <div className="d-flex justify-content-center">
//               <Button variant="primary" type="submit" className="px-4 py-2">
//                 Submit
//               </Button>
//             </div>
//           </Form>
//         </Card.Body>
//       </Card>

//       {/* Social Media Section */}
//       <div className="social-media mt-5 text-center">
//         <h4 className="mb-3">Follow Me</h4>
//         <div className="d-flex justify-content-center gap-4">
//           <a
//             href="https://www.linkedin.com/in/omshri-patel-950545216/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//           >
//             <FaLinkedin size={30} />
//           </a>
//           <a
//             href="https://www.instagram.com/indian_personality063/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//           >
//             <FaInstagram size={30} />
//           </a>
//           <a
//             href="https://github.com/omshreepatel"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//           >
//             <FaGithub size={30} />
//           </a>
//           <a
//             href="https://x.com/OmshriP82258"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//           >
//             <FaTwitter size={30} />
//           </a>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
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
      // Get the backend URL from the .env file
      const backendUrl =
        import.meta.env.VITE_BACKEND_URL || "http://localhost:8090"; // Fallback for local dev

      const response = await fetch(
        `${backendUrl}/ContactServlet`, // Using the backend URL from the .env
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData), // Send form data using URLSearchParams
        }
      );

      const result = await response.json(); // Parse the JSON response from backend
      if (result.status === "success") {
        alert("✅ Message sent successfully: " + result.message); // Success message
      } else {
        alert("❌ Error: " + result.message); // Failure message
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("🚨 Failed to submit form. Please try again.");
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
