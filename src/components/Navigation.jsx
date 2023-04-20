import { Col, Container, Row, Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
    return(
        <Navbar bg="danger" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Camila Sandoval</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Add the toggler */}
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}