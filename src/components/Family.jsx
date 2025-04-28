// src/components/Family.jsx
import React from "react";
import { Container, Card } from "react-bootstrap";

const Family = () => {
  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4 text-primary">My Family Background</h2>
      <Card className="shadow-lg border-0 rounded-lg">
        <Card.Body>
          <p className="lead text-muted">
            I belong to a loving and supportive family. My father is an
            agriculturist, my mother is a homemaker, and I have one elder
            brother.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Family;
