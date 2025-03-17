import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="contact-header"
      >
        <h1>Let's Connect</h1>
        <p>Reach out to me for collaborations, projects, or just to say hello!</p>
      </motion.div>

      <div className="contact-grid">
        <motion.a
          href="tel:+918767542209"
          className="contact-card"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhone className="contact-icon" />
          <span>+91-8767542209</span>
        </motion.a>

        <motion.a
          href="mailto:nileshpulate87@gmail.com"
          className="contact-card"
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope className="contact-icon" />
          <span>nileshpulate87@gmail.com</span>
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/nileshpulate"
          target="_blank"
          className="contact-card"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </motion.a>

        <motion.a
          href="https://github.com/N8758"
          target="_blank"
          className="contact-card"
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </motion.a>

        <motion.a
          href="https://sites.google.com/view/nilpul"
          target="_blank"
          className="contact-card"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGlobe className="contact-icon" />
          <span>Portfolio Website</span>
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
