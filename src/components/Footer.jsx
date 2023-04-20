import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {

    const currentYear = new Date().getFullYear()
    return(
        <footer>
            <Container>
                <Row>
                    <Col>
                        <p>&copy; {currentYear} - Camila Sandoval </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}