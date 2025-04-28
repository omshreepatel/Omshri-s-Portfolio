// src/components/AdminPanel.jsx

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AdminPanel = () => {
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [internships, setInternships] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetchMessages();
    fetchProjects();
    fetchInternships();
    fetchCertifications();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch(
        "http://localhost:8090/portfolio-backend1/FetchMessagesServlet"
      );
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await fetch(
        "http://localhost:8090/portfolio-backend1/FetchProjectsServlet"
      );
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const fetchInternships = async () => {
    try {
      const res = await fetch(
        "http://localhost:8090/portfolio-backend1/FetchInternshipsServlet"
      );
      const data = await res.json();
      setInternships(data);
    } catch (error) {
      console.error("Error fetching internships:", error);
    }
  };

  const fetchCertifications = async () => {
    try {
      const res = await fetch(
        "http://localhost:8090/portfolio-backend1/FetchCertificationsServlet"
      );
      const data = await res.json();
      setCertifications(data);
    } catch (error) {
      console.error("Error fetching certifications:", error);
    }
  };

  const handleLogout = () => {
    Swal.fire("Logged Out!", "You have successfully logged out.", "success");
    window.location.reload();
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">👨‍💻 Admin Dashboard</h1>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Contact Messages Section */}
      <section className="mb-5">
        <h3 className="text-secondary mb-3">📩 Contact Messages</h3>
        {messages.length === 0 ? (
          <div className="alert alert-info">No messages found.</div>
        ) : (
          <div className="card shadow-sm">
            <div className="card-body p-0">
              <table className="table mb-0 table-hover">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg) => (
                    <tr key={msg.id}>
                      <td>{msg.id}</td>
                      <td>{msg.name}</td>
                      <td>{msg.email}</td>
                      <td>{msg.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* Projects Section */}
      {/* <section className="mb-5">
        <h3 className="text-secondary mb-3">🛠️ Projects</h3>
        {projects.length === 0 ? (
          <div className="alert alert-info">No projects found.</div>
        ) : (
          <div className="row">
            {projects.map((proj) => (
              <div key={proj.id} className="col-md-6 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{proj.title}</h5>
                    <p className="card-text">{proj.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section> */}

      {/* Internships Section */}
      {/* <section className="mb-5">
        <h3 className="text-secondary mb-3">🏢 Internships</h3>
        {internships.length === 0 ? (
          <div className="alert alert-info">No internships found.</div>
        ) : (
          <div className="list-group">
            {internships.map((intern) => (
              <div
                key={intern.id}
                className="list-group-item list-group-item-action"
              >
                <strong>{intern.company}</strong> - {intern.role}
              </div>
            ))}
          </div>
        )}
      </section>

      
      <section className="mb-5">
        <h3 className="text-secondary mb-3">🏆 Certifications</h3>
        {certifications.length === 0 ? (
          <div className="alert alert-info">No certifications found.</div>
        ) : (
          <div className="list-group">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="list-group-item list-group-item-action"
              >
                <strong>{cert.name}</strong> - {cert.organization}
              </div>
            ))}
          </div>
        )}
      </section> */}
    </div>
  );
};

export default AdminPanel;
