import React from "react";
import "./aboutme.css";
import { Col, Container, Row } from "react-bootstrap";
import SocialMedia from "../SocialMedia/SocialMedia";

const AboutMe = () => {
    return(
        <div id="about">
            <Container>
                <Row>
                    <Col md={{span: 8, offset:2}} text-center className="heading">
                        <h2>About Me</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <ul className="info">
                            <li><span className="first-block">Full Name:</span><span className="second-block">Uttam Rao</span></li>
                            <li><span className="first-block">Phone:</span><span className="second-block">+91 9471850473</span></li>
                            <li><span className="first-block">Email:</span><span className="second-block">uttamrao2000@gmail.com</span></li>
                            <li><span className="first-block">Website:</span><span className="second-block">uttamrao.netlify.net</span></li>
                            <li><span className="first-block">Address:</span><span className="second-block">Kalwad Basti, Lohegaon, Pune, 411032</span></li>
                        </ul>
                    </Col>
                    <Col md={8}>
                        <h2 className="hello">Hello There!</h2>
					    <p>
                            🌱 I’m currently learning everything. 😁<br />
						    👯 I’m looking to collaborate with other content creators.<br />
						    🥅 2023 Goals: Contribute more to Open Source projects.<br />
						    ⚡ I love to play Cricket, Badminton and Chess.
                        </p>
                        <SocialMedia style={{color:"black !important"}} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;