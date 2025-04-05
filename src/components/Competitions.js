import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Competitions = () => {
  const competitions = [
      {
        title: "Software & Electrical Engineer ",
        company: "UROCK",
        location: "Kuala Lumpur, MY",
        duration: "Sep 2023 - Nov 2024",
        details: [
          "Developed electronics for controlling 12x 150 kg·cm high torque servos through ROS communication with OpenCR and Jetson Nano.",
          "Programmed in Arduino for sending and receiving joint states and IMU data and commands to and from the Jetson Nano and OpenCR.",
          "Integrated LiDAR and Depth Camera for autonomous navigation and run on startup."
        ]
      },
      {
        title: "Hardware Engineer",
        company: "COMBAT ROBOT",
        location: "Kuala Lumpur, MY",
        duration: "Aug 2023 - Sep 2024",
        details: [
          "Worked on CAD design of a tire-based robot and a drum spinner/ramp robot.",
          "Assembled and repaired the robot between matches, including replacing critical components like the drum spinner, side plates, and ramp to ensure peak performance during competitions."
        ]
      },
      {
        title: "Software Engineer",
        company: "ROBOCON",
        location: "Kuala Lumpur, MY",
        duration: "Aug 2023 - Jun 2024",
        details: [
          "Programmed Autonomous and manual control movement of the Robot 2 to grip the ball and place into silo alongside teammate in software team",
          "Developed and trained a machine learning model for detecting the red, purple, blue balls and the silo in the game field.",
          "SSH into Jetson Nano for wireless control of Mechanum Wheel movement and Gripper through ROS communication with Arduino for Open Day project showcase"
        ]
      },
  ];

  return (
    <section className="eec" id="competitions">
      <Container>


        <div className="timeline">
          {competitions.map((eec, index) => (
            <Row key={index} className="justify-content-left">
              <Col md={12}>
                <div className="timeline-card">
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
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};
