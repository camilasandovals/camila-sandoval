import { Container, Row, Col } from "react-bootstrap";
import { Github } from "bootstrap-icons"
export default function Footer() {

    const currentYear = new Date().getFullYear()
    return(
        <footer>
            <Container>
                <Row>
                    <Col >
                        <p>&copy; {currentYear} - Camila Sandoval </p>
                        <p><Github /></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}