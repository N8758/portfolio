import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="resume-header"
      >
        <h1>My Resume</h1>
        <p>Download my resume and check out my experience & skills.</p>
      </motion.div>

      <motion.a
        href="https://drive.google.com/file/d/11B9ITkaUgDtfa9voGK5YTPvPvWxgh95O/view?usp=drivesdk"
        target="_blank"
        className="resume-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        📄 Download Resume
      </motion.a>
    </section>
  );
};

export default Resume;
