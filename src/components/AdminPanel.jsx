// src/components/AdminPanel.jsx

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AdminPanel = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
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
    </div>
  );
};

export default AdminPanel;
