import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function Menubar() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/" style={{
            backgroundImage: `url(/images/boca-code-rgb-logo-tag.svg)`,
            display: 'block',
            width: '150px',
            height: '48px',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            marginTop: '4px'
          }} className="header-logo">
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse >
            <Nav className="me-auto">
            </Nav>
            <Nav >
              <Nav.Link href="/home" style={{ paddingLeft: "50px" }}>Home</Nav.Link>
              <Nav.Link href="/aboutme" style={{ paddingLeft: "50px" }} >About me</Nav.Link>
              <Nav.Link href="/portfolio" style={{ paddingLeft: "50px" }}>Portfolio</Nav.Link>
              <Nav.Link href="/recommendations" style={{ paddingLeft: "50px" }}>Recommendations</Nav.Link>
              <Nav.Link className="navbar-cta" href="https://resumecs.s3.amazonaws.com/resume.pdf" style={{ paddingLeft: "50px" }}>
                <Button variant="primary" >Download CV</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}


