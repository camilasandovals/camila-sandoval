import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function Menubar() {
     return (
          <header className='header' id="top">
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                                   <Nav.Link href="/courses" >Courses</Nav.Link>
                                   <Nav.Link href="/for-companies">For Companies</Nav.Link>
                                   <Nav.Link href="/candidates">Candidates</Nav.Link>
                                   <Nav.Link href="/alumni">Alumni</Nav.Link>
                                   <Nav.Link className="navbar-cta" href="/get-started">
                                        <Button variant="primary">Get Started</Button>
                                   </Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </header>
     )
}

export default Menubar

