import { Col, Row, Button } from "react-bootstrap";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Header() {
  const [text] = useTypewriter({
    words: [" Software Engineer", " Biomed Engineer"],
    loop: 0,
  });

  return (
    <header className="header">
      <Row className="text-center align-items-center h-100 mt-4">
        <Col sm={12} md={7} style={{ zIndex: 1, paddingRight:0 }}>
          <h3>👋 HELLO, I AM</h3>
          <h1>Camila</h1>
          <h3 style={{paddingBottom:25}}>
            I am a <span style={{ color: "purple" }}>{text}</span>{" "}
            <span>
              <Cursor />
            </span>
          </h3>
          <a href="mailto:csandoval.eng@gmail.com">
            <Button variant="primary">Get in touch</Button>
              </a>
        </Col>
        <Col sm={12} md={3} className="image-container" style={{ zIndex: 0 , paddingLeft:0 }}>
          <img className="mt-5 img-fluid" src="/images/profile.webp" alt="image" />
        </Col>
      </Row>
    </header>
  );
}