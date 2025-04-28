import React, { useState } from "react";
import "./ProjectAdmin.css";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

const ProjectAdmin = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project One",
      description: "Description of Project One",
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description of Project Two",
      link: "https://example.com/project2",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    id: null,
    title: "",
    description: "",
    link: "",
  });

  const handleShowModal = (project = null) => {
    if (project) {
      setCurrentProject(project);
    } else {
      setCurrentProject({
        id: null,
        title: "",
        description: "",
        link: "",
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({
      ...currentProject,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (currentProject.id) {
      // Edit existing project
      setProjects(
        projects.map((project) =>
          project.id === currentProject.id ? currentProject : project
        )
      );
    } else {
      // Add new project
      setProjects([
        ...projects,
        { ...currentProject, id: projects.length + 1 },
      ]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <Container id="projects-admin" className="my-5">
      <h2 className="text-center mb-4 text-primary">Admin - Manage Projects</h2>
      <Button
        variant="success"
        className="mb-4"
        onClick={() => handleShowModal()}
      >
        Add New Project
      </Button>
      <Row>
        {projects.map((proj) => (
          <Col key={proj.id} md={6} sm={12} className="mb-4">
            <Card className="h-100 shadow-lg rounded-lg">
              <Card.Body>
                <h5 className="card-title">{proj.title}</h5>
                <p className="card-text">{proj.description}</p>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => handleShowModal(proj)}
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(proj.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for adding/editing project */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentProject.id ? "Edit Project" : "Add New Project"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={currentProject.title}
                onChange={handleChange}
                placeholder="Enter project title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={currentProject.description}
                onChange={handleChange}
                placeholder="Enter project description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="url"
                name="link"
                value={currentProject.link}
                onChange={handleChange}
                placeholder="Enter project link"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProjectAdmin;
