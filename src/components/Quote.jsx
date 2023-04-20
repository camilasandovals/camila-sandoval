import { Col, Container, Row } from "react-bootstrap";

export default function Quote() {
    return (
        <section className = "bg-success">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h2>Quote</h2>
                        <q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate at tempore non nobis hic neque facilis, sapiente minus sit dolore sint libero dolorem. Inventore impedit suscipit repellat rerum obcaecati!</q>
                        <p>Autor</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}