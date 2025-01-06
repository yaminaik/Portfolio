import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Marlabs",
      duration: "July 2024 - Present",
      description: "Developed scalable UI components using React and optimized app performance by 30%."
    },
    {
      role: "Software Engineer",
      company: "BizInc",
      duration: "Sept 2024 - Present",
      description: "Building an innovative job-centric application similar to LinkedIn."
    },
    {
      role: "Software Engineer",
      company: "FurBaby",
      duration: "Sept 2023 - May 2024",
      description:  "Developed a responsive pet care web app allowing users to manage pet care schedules.",
    },
    {
      role: "Programmer Analyst",
      company: "Cognizant Technology Solutions",
      duration: "Aug 2021 - Jul 2022",
      description: "Maintained AWS EC2 instances and automated workflows using Python."
    },
    {
      role: "Software Engineer",
      company: "Pixeta App Lab",
      duration: "May 2021 - Aug 2022",
      description: "Led UI/UX enhancements for EasyEdmin and Cosmos platforms.",
    },
    {
      role: "Software Engineer",
      company: "Dharmsinh Desai University",
      duration: "July 2020 - May 2021",
      description: "Developed BookEasy, a personalized book recommendation system.",
    },
  ];

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <p><strong>{exp.company}</strong> | {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
