import { Button, Col, Container, Row } from "react-bootstrap";
import {  Github, Instagram, Linkedin } from "react-bootstrap-icons";

export default function About() {
  return (
    <section className="about-container">
      <Container >
        
        <Row className="text-center justify-content-center align-items-center gx-5">
          <Col sm={12} md={5} className="image-container2">
            <img src="/images/cs2.webp" className="img-fluid" alt="Camila Sandoval" />
          </Col>
          <Col sm={12} md={5}>
            <h2>ABOUT ME</h2>
            <h3 style={{color:"black"}}>
              I am <span style={{ fontWeight: "800" }}>Camila Sandoval.</span>
            </h3>

            <h3 style={{ color: "gray" }}>
               Full Stack Developer.
            </h3>
            <Row>
              <p>
                I specialize in designing and developing modern websites, with
                a focus on backend development for clients of all sizes. My
                passion is to solve complex problems in an efficient manner
                while creating bold and meaningful interfaces for digital user
                experiences. Collaborating with new people is one of my favorite
                things to do. ✨{" "}
              </p>
            </Row>

            <Row>
              <p>
                I love learning from and working with others on exciting
                projects. 🚀
              </p>
            </Row>
            <Row>
              <Col>
                <a href="https://github.com/camilasandovals" style={{ marginRight: '35px' }}>
                  <Github size={35} color="gray" />
                </a>
                <a href="https://www.linkedin.com/in/camilasandovals/" style={{ marginRight: '35px' }}>
                  <Linkedin size={35} color="gray" />
                </a>
                <a href="https://www.instagram.com/foreigncoders/">
                  <Instagram size={35} color="gray" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
