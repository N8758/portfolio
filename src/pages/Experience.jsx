import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experienceData = [
  {
    title: "Full Stack Development Intern",
    company: "Sumago Infotech Pvt. Ltd.",
    duration: "January 2024 – March 2024",
    location: "Nashik",
    contributions: [
      "Developed dynamic and responsive web applications using React.js.",
      "Integrated Node.js and Express.js for seamless backend communication.",
      "Optimized front-end performance with lazy loading and code splitting.",
      "Implemented authentication and authorization systems.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Advanto Software Pvt. Ltd.",
    duration: "March 2023 – May 2023",
    location: "Pune",
    contributions: [
      "Designed, trained, and deployed ML models for predictive analytics.",
      "Performed data preprocessing, feature engineering, and model evaluation.",
      "Worked with large datasets, performing data cleaning and transformation.",
      "Developed automated scripts for running experiments, reducing manual effort.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Techplement",
    duration: "November 2025 – January 2025",
    location: "Pune",
    contributions: [
      "Designed and developed full-stack web applications using the MERN stack.",
      "Built RESTful APIs to handle business logic and database interactions.",
      "Integrated third-party services like payment gateways and social media authentication.",
      "Implemented CRUD operations for managing application data efficiently.",
    ],
  },
  {
    title: "AI/ML Intern",
    company: "Ybi Foundation",
    duration: "January 2025 – February 2025",
    location: "Pune",
    contributions: [
      "Developed AI/ML models and real-world applications using Python.",
      "Implemented ML algorithms such as regression, classification, and clustering.",
      "Worked with TensorFlow, Scikit-learn, and PyTorch for AI model deployment.",
      "Collaborated with cross-functional teams to integrate AI/ML solutions.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="experience-header"
      >
        <h1>My Experience</h1>
        <p>Here are some of my professional experiences.</p>
      </motion.div>

      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            whileHover={{ scale: 1.05 }}
          >
            <h2>{exp.title}</h2>
            <h3>{exp.company}</h3>
            <p><strong>{exp.duration}</strong> | {exp.location}</p>
            <ul>
              {exp.contributions.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
