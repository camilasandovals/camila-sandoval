import { Button, Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <section className="about-container">
      <Container >
        <Row className="text-center justify-content-center align-items-center gx-5">
          <Col sm={12} md={5} className="image-container2">
            <img src="/images/cs2.png" className="img-fluid" alt="Camila Sandoval" />
          </Col>
          <Col sm={12} md={5}>
            <h3>ABOUT ME</h3>
            <h4>
              I am <span style={{ fontWeight: "800" }}>Camila Sandoval.</span>
            </h4>

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

            <Row className="justify-content-center">
              <a href="mailto:csandoval.eng@gmail.com">
                <button variant="primary" type="button">Download CV</button>
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
