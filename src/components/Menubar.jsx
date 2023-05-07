import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function Menubar() {
  return (
    <header className='header' id="top">
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="/portfolio" >Portfolio</Nav.Link>
              <Nav.Link href="/aboutme">About me</Nav.Link>
              <Nav.Link href="/recommendations">Recommendations</Nav.Link>
              <Nav.Link href="/alumni">Alumni</Nav.Link>
              <Nav.Link className="navbar-cta" href="/get-started">
                <Button variant="primary">Download CV</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

