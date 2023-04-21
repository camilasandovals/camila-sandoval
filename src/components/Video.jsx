import { Container, Row, Col } from "react-bootstrap";

export default function Video() {
    return(
        <section>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2>Video</h2>
                        <iframe width="100%" height="515" src="https://www.youtube.com/embed/NLTmkYLI70k?start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}