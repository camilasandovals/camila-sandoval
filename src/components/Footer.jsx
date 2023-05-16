import { Container, Row, Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons"
export default function Footer() {

    const currentYear = new Date().getFullYear()
    return(
        <footer>
            <Container>
                <Row>
                    <Col >
                        {/* <a href="https://github.com/camilasandovals"><Github size={35} color="black"/></a> */}
                        <p>&copy; {currentYear} - Camila Sandoval</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}