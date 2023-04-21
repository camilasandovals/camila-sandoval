import { Col, Container, Row } from "react-bootstrap";

export default function Quote() {
    return (
        <section className = "quote-container">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h4><q>Fall down seven times. Stand up eight</q></h4>
                        <p>Japanese Proverb</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}