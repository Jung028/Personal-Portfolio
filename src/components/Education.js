import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  const educations = [
    {
      title: "Bs(Hons) Computer Science",
      company: "SUNWAY UNIVERSITY & LANCASTER UNIVERSITY",
      location: "Malaysia, UK",
      duration: "Jan 2022 - Jan 2025",
      details: [
        "Created Robotic Dog, Autonomous Mobile Robot, and Combat Robot for Sunway Robotics Competitions.",
        "Relevant Coursework: Artificial Intelligence, Computer Vision, Computational Intelligence, Distributed Systems.",
        "Final Year Capstone Project: 'Design and Development of a Quadruped Robot for Autonomous Navigation in Dynamic Environments.'"
      ]
    },
    {
      title: "Sunway Foundation in Arts Programme",
      company: "SUNWAY COLLEGE",
      location: "Kuala Lumpur, MY",
      duration: "Jan 2021 - Jan 2022",
      details: [
        "Sunway Futsal Club, Sunway Athletics, Sunway Tech Club.",
        "Relevant Coursework: Business, Computer Science, Microeconomics."
      ]
    }
  ];

  return (
    <section className="eec" id="eductions">
      <Container>

        <div className="timeline">
          {educations.map((eec, index) => (
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
