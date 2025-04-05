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
        "Conducted stress tests on the ASRS, evaluating inbound-to-outbound workflows, including pallet verification, AMR transport, stacker crane operations, and order retrieval.",
        "Analyzed Transport Port correlations, identifying floor leveling issues and optimizing crane parameters.",
        "Measured expansion area for AMR deployment and conducted detailed measurements of racks and goods at the MAERSK Warehouse, Petaling Jaya.",
        "Learned about Geek+ API for put-away and picking orders using HTTP POST requests with JSON data."
      ]
    },
    {
      title: "Head of Event Management",
      company: "SUNWAY ROBOTICS CLUB",
      location: "Kuala Lumpur, MY",
      duration: "Aug 2024 - Jan 2025",
      details: [
        "Oversee events, create, suggest, and organize events ensuring they run smoothly, resolving conflicts and issues promptly.",
        "Organized workshops and events such as Arduino 1.0, 2.0, 3D printing workshop, and technical talks.",
        "Developed a sustainable education documentation outlining guidelines for future event managers organizing workshops.",
        "Led the Project Developers and Event Management Teams in developing workshops and organizing talks and events."
      ]
    },
    {
      title: "Event Management Committee",
      company: "SUNWAY ROBOTICS CLUB",
      location: "Kuala Lumpur, MY",
      duration: "Aug 2023 - Aug 2024",
      details: [
        "Prepared project proposals for events like Arduino workshops, 3D printing, Bluetooth communication, Embedded Systems, and ROS talks.",
        "Liaised with Student Life and external speakers for organizing talks at Sunway University.",
        "Prepared and organized post-event reports."
      ]
    },
    {
      title: "Mobile Applications Developer",
      company: "ALVA PRODUCTIONS",
      location: "Kuala Lumpur, MY",
      duration: "Jan 2024 - Apr 2024",
      details: [
        "Built a mobile application for film production directors to manage their team of directors, actors, and display all their contacts and personal information in a single app.",
        "Worked alongside remote teammates, ensuring smooth communication between all members and managers.",
        "Led the team in correcting and compiling code to ensure smooth integration and development of code structure and organization.",
        "Programmed in Dart, Flutter, and integrated Firebase for data retrieval."
      ]
    }
  ];

  return (
    <section className="eec" id="experiences">
      <Container>
        <div className="timeline">
          {experiences.map((eec, index) => (
            <Row key={index} className="justify-content-left">
              <Col md={12}>
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <div className={`timeline-card ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                      <div className="timeline-header">
                        <h4 className="text-left">{eec.title}</h4>
                        <h5 className="text-left">{eec.company}</h5>
                        <p className="text-left">{eec.location} — {eec.duration}</p>
                      </div>
                      <div className="timeline-details">
                        <ul>
                          {eec.details.map((detail, idx) => (
                            <li key={idx} className="text-left">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </TrackVisibility>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};
