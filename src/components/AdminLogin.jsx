import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Container, Card, Form, Button } from "react-bootstrap";

const AdminLogin = ({ setIsAdminLoggedIn }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = credentials;

    try {
      // Get the backend URL from the environment variable
      const backendUrl =
        import.meta.env.VITE_BACKEND_URL || "http://localhost:8090";
      console.log("Backend URL:", backendUrl);

      const response = await fetch(
        `${backendUrl}/portfolio-backend1/AdminLoginServlet`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `username=${encodeURIComponent(
            username
          )}&password=${encodeURIComponent(password)}`,
          credentials: "include", // Send cookies/session
        }
      );

      const result = await response.text();

      if (result === "success") {
        Swal.fire("Welcome!", "You are successfully logged in!", "success");
        setIsAdminLoggedIn(true); // Update parent state
        navigate("/admin/dashboard"); // Navigate to dashboard
      } else {
        Swal.fire("Oops!", "Invalid Credentials.", "error");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      Swal.fire("Error", "An error occurred while logging in.", "error");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow-lg p-4 w-100" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4 text-primary">Admin Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                className="form-control"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 py-2">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AdminLogin;
