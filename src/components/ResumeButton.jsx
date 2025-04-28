// src/components/ResumeButton.jsx

import React from "react";

const ResumeButton = ({ file = "/Omshri_CV.pdf", label = "Resume" }) => {
  return (
    <a
      href={file}
      download
      className="btn btn-success"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fas fa-download"></i> {label}
    </a>
  );
};

export default ResumeButton;
