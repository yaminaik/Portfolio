import React, { useState } from "react";

const Projects = () => {
  const [openPDF, setOpenPDF] = useState(null); // State to handle PDF modal visibility

  const projects = [
    {
      title: "Insights into the Fishing Industry",
      description:
        "Pioneered a comprehensive big data analysis on overfishing, integrating multiple datasets with Apache Spark and Python, optimized data workflows, and presented findings that informed sustainable fishing practices.",
      video: "public/assets/Fishery_PPT.pdf", // Path to the PDF
      link: "https://github.com/Big-Data-CS-GY6513/extract",
    
    },
    {
        title: "JustBreathe-SIDS Detection",
        description: "Engineered JustBreathe, a cutting-edge infant safety device with temperature sensors, providing crucial, non-invasive monitoring to combat Sudden Infant Death Syndrome (SIDS) and reassure parents.",
     
        link: "https://github.com/yaminaik/JustBreathe"
    },
    {
        title: "Object Detection",
        description: "Satellite Sentinel: Enhancing Object Detection in Satellite Imagery with Advanced Deep Learning Techniques",
        video: "/assets/od.pdf",
        link: "https://github.com/yaminaik/ObjectDetection"
    },
    {
        title: "A modified ResNet Architecture with Optimal Test Accuracy",
        description: "Revolutionized ResNet18 architecture by custom modifications, achieving optimal test accuracy with a streamlined model under 5 million parameters, demonstrating significant advancements in deep learning efficiency.",
        video:"/assets/MiniProject.pdf",
        link: "https://github.com/yaminaik/OptimizedResNet18"
    },
    {
        title: "Breast Cancer Prediction",
        description: "I leveraged advanced machine learning techniques to develop a predictive model that accurately distinguishes between malignant and benign breast cancer tumors, based on cell nucleus characteristics from fine needle aspirate (FNA) images, showcasing my proficiency in data preprocessing, exploratory data analysis, feature selection, and model optimization.",
        link: "https://github.com/yaminaik/BreastCancer"
    },
  ];

  // Function to open the PDF modal
  const openPDFModal = (pdfPath) => {
    setOpenPDF(pdfPath);
  };

  // Function to close the PDF modal
  const closePDFModal = () => {
    setOpenPDF(null);
  };

  return (
    <section id="projects" className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.video && (
              <a
                className="project-link"
                onClick={() => openPDFModal(project.video)}
              >
                View Presentation
              </a>
            )}<br />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>

      {/* PDF Modal */}
      {openPDF && (
        <div className="pdf-modal">
          <div className="pdf-content">
            <button className="close-btn" onClick={closePDFModal}>
              &times;
            </button>
            <iframe src={openPDF} title="PDF Viewer" className="pdf-viewer" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
