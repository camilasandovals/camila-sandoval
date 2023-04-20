import { Col, Container, Row } from "react-bootstrap";

export default function About() {
    return(
        <Container>
            <Row>
                <h2 className="text-center m-5"> About me </h2>
                <Col>
                <img src="https://picsum.photos/seed/picsum/500/500" alt="Camila Sandoval" />
                </Col>
                <Col>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo nihil, esse optio hic modi error dolorem, inventore, officiis minima veritatis dolore assumenda saepe quisquam et at doloribus aspernatur enim?
                </Col>
            </Row>
        </Container>
    )
}