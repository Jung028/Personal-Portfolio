import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Experience = () => {
  const experiences = [
    {
      title: "Mechatronics Engineer (Software Specialized)",
      company: "LOGIFLOW AUTOMATION",
      location: "Shah Alam, MY",
      duration: "Jan 2025 - Mar 2025",
      details: [
        "Conducted stress tests on the ASRS...",
        "Operated stacker cranes in various modes...",
        "Analyzed Transport Port correlations...",
        "Ensured seamless sensor synchronization...",
        "Verified rack specifications...",
        "Learned about Geek+ API..."
      ]
    },
    {
      title: "Head of Event Management",
      company: "SUNWAY ROBOTICS CLUB",
      location: "Kuala Lumpur, MY",
      duration: "Aug 2024 - Jan 2025",
      details: [
        "Oversee events and resolve issues...",
        "Organized Arduino and 3D printing workshops...",
        "Developed sustainable event guidelines...",
        "Led developers and event teams..."
      ]
    },
    {
      title: "Event Management Committee",
      company: "SUNWAY ROBOTICS CLUB",
      location: "Kuala Lumpur, MY",
      duration: "Aug 2023 - Aug 2024",
      details: [
        "Prepared proposals for various workshops...",
        "Liaised with Student Life and speakers...",
        "Organized post-event reports..."
      ]
    },
    {
      title: "Mobile Applications Developer",
      company: "ALVA PRODUCTIONS",
      location: "Kuala Lumpur, MY",
      duration: "Jan 2024 - Apr 2024",
      details: [
        "Built app for film directors...",
        "Collaborated remotely with team...",
        "Led code integration efforts...",
        "Used Flutter & Firebase..."
      ]
    }
  ];

  return (
    <section className="experience" id="experiences">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-white text-center">Experience</h2>
                  <p className="text-white text-center">
                    A timeline of my work and leadership experience in engineering, software development, and event management.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <Row key={index} className="justify-content-center">
              <Col md={8}>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <p>{exp.location} — {exp.duration}</p>
                  </div>
                  <div className="timeline-details">
                    <ul>
                      {exp.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};
