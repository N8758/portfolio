import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const educationData = [
  {
    degree: "BE in Information Technology",
    institution: "Amrutvahini College of Engineering, Sangamner",
    details: "Pune University (9.10 CGPA, Till 8th Sem) | 2021 - 2025",
  },
  {
    degree: "HSC",
    institution: "CSMM, Pathare",
    details: "Maharashtra State Board (68%) | 2021",
  },
  {
    degree: "SSC",
    institution: "PMV, Durgapur",
    details: "Maharashtra State Board (72%) | 2019",
  },
];

const Education = () => {
  return (
    <section className="education-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="education-header"
      >
        <h1>My Education</h1>
        <p>Here is my academic journey so far.</p>
      </motion.div>

      <div className="education-grid">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            whileHover={{ scale: 1.05 }}
          >
            <h2>{edu.degree}</h2>
            <h3>{edu.institution}</h3>
            <p>{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
