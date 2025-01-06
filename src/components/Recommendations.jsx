import React from "react";


const Recommendations = () => {
  const recommendations = [
    {
      name: "Mukesh Goswami",
      title: "Associate professor",
      description: "Mukesh Goswami has been an integral mentor throughout my academic journey, providing valuable guidance and witnessing my progression as a developer through multiple projects.",
      pdf: "/assets/r1.pdf", // Path to the PDF
    },
    {
      name: "Sunil Vithlani",
      title: "Assistant Professor",
      description: "Sunil Vithlani supervised my contributions to the Database Project, offering insights and mentorship that honed my technical and problem-solving skills.",
      pdf: "/assets/r2.pdf", // Path to the PDF
    },
    {
        name: "Dr. Chintan Naik",
        title: "Founder",
        description: "While interning at Pixeta App Lab under Dr. Chintan Naik, I contributed to the cosMOS ERP project, gaining hands-on experience in building scalable solutions for cooperative societies.",
        pdf: "/assets/r3.pdf", // Path to the PDF
      },
  ];

  return (
    <section id="recommendations" className="section">
      <h2>Recommendations</h2>
      <div className="recommendations-container">
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation-card">
            <h3>{rec.name}</h3>
            <p><strong>{rec.title}</strong></p>
            <p>{rec.description}</p>
            <a
              href={rec.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="recommendation-link"
            >
              View Letter
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
