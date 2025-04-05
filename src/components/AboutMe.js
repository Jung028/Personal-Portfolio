import React, { useState } from "react";
import "animate.css";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Competitions } from "./Competitions";

const AboutMe = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Python", "C++",
    "Machine Learning", "ROS", "Git", "SQL", "HTML/CSS",
    "OpenCV", "TensorFlow", "Linux", "Docker", "Firebase"
  ];

  const randomTitle = "About Me";
  const randomText = "Hello World";

  // State to manage toggling between Experience, Education, and Competitions
  const [activeContent, setActiveContent] = useState("experience");

  const toggleContent = (content) => {
    setActiveContent(content);
  };

  return (
    <section className="about-me" id="about">
      {/* Random Title and Text */}
      <div className="about-me-intro">
        <h2>{randomTitle}</h2>
        <p>{randomText}</p>
      </div>

      <div className="about-me-container">
        {/* Left - Skills */}
        <div className="about-me-left card-box">
          <h2>About Me</h2>
          <p>
            I am a passionate robotics and software engineer with a strong foundation in web development,
            AI, and embedded systems. I enjoy solving real-world problems through code and building systems
            that have meaningful impact.
          </p>
          <h4>Skills</h4>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span className="skill-badge" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right - Experience, Education & Competitions */}
        <div className="about-me-right card-box">
          {/* Button Container */}
          <div className="button-container">
            <button
              onClick={() => toggleContent("experience")}
              className={`toggle-btn ${activeContent === "experience" ? "active" : ""}`}
            >
              Experience
            </button>
            <button
              onClick={() => toggleContent("education")}
              className={`toggle-btn ${activeContent === "education" ? "active" : ""}`}
            >
              Education
            </button>
            <button
              onClick={() => toggleContent("competitions")}
              className={`toggle-btn ${activeContent === "competitions" ? "active" : ""}`}
            >
              Competitions
            </button>
          </div>

          {/* Conditionally render Experience, Education, or Competitions */}
          <div className="cards-container">
            {activeContent === "experience" && <Experience />}
            {activeContent === "education" && <Education />}
            {activeContent === "competitions" && <Competitions />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
