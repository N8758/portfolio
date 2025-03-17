import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaServer, FaCloud, FaChartBar, FaBrain } from "react-icons/fa";
import "./Skills.css";

const skills = [
  { category: "Programming", items: ["JavaScript (ES6+)", "Python", "Java", "C++"], icon: <FaCode /> },
  { category: "Front-End", items: ["React.js", "Redux", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"], icon: <FaCode /> },
  { category: "Back-End", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"], icon: <FaServer /> },
  { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"], icon: <FaDatabase /> },
  { category: "DevOps & Cloud", items: ["AWS (EC2, S3, Lambda)", "Docker", "CI/CD", "GitHub Actions"], icon: <FaCloud /> },
  { category: "AI/ML & Data Science", items: ["NumPy", "Pandas", "Matplotlib", "NLP", "ML Algorithms"], icon: <FaBrain /> },
  { category: "Data Visualization", items: ["Power BI", "Excel", "DAX"], icon: <FaChartBar /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="skill-card"
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
