import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import NILphoto from "../assets/NILphoto.jpg";

const Home = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 1 }} 
      className="home-container"
    >
      <div className="home-content">
        {/* ✅ Animated Heading with Text Gradient */}
        <motion.h1 
          className="home-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, I'm <span>Nilesh Pulate</span>
        </motion.h1>

        {/* ✅ Typing Effect Subtitle */}
        <motion.p 
          className="home-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Aspiring Full Stack Developer | Java | React | AI/ML | Innovative Solutions
        </motion.p>

        {/* ✅ Call to Action Buttons */}
        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* <a href="/projects" className="btn">📂 View Projects</a>
          <a href="/contact" className="btn btn-secondary">📞 Contact Me</a> */}
        </motion.div>
      </div>

      {/* ✅ Animated Profile Picture */}
      <motion.img 
        src={NILphoto} 
        alt="Nilesh Pulate" 
        className="profile-pic"
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }}
      />
    </motion.section>
  );
};

export default Home;
