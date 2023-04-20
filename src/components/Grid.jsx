import { Col, Container, Row } from "react-bootstrap";

export default function Grid() {
    return (
        <section>
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <h3> Why Bocacode?</h3>
                        <p> Because it is amazing</p>
                    </Col>

                    <Col sm={12} md={4}>
                        <h3>Exciting Project?</h3>
                            <p>SPN pulmonary nodules $$link</p>
                    </Col>

                    <Col sm={12} md={4}>
                        <h3>Ideal Work Place?</h3>
                        <p>A place that respect cultural differences</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}