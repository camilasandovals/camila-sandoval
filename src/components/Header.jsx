import { Col, Container, Row } from "react-bootstrap";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Header() {
  const [text] = useTypewriter({
    words: [" Software Engineer", " Biomed Engineer"],
    loop: 0,
  });

  return (
    <header>
      <Container>
        <Row className="text-center">
          <Col sm={12} md={7} className="header-text-container" style={{ zIndex: 1, paddingTop: "50px" }}>
            <h3>👋 HELLO, I AM</h3>
            <h1>Camila</h1>
            <h3>
              I am a <span style={{ color: "purple" }}>{text}</span>{" "}
              <span>
                <Cursor />
              </span>
            </h3>
          </Col>
          <Col sm={12} md={3} className="image-container" style={{ zIndex: 0 }}>
            <img className="mt-5 img-fluid" src="/images/profile.png" alt="image" />
            </Col>
          <Col md={2}>
                
          </Col >
        </Row>
      </Container>
    </header>
  );
}