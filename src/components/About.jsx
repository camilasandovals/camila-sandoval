import { Col, Container, Row } from "react-bootstrap";

export default function About() {
    return(
        <Container>
            <Row className="text-center">
                <h2 className="m-5"> About me </h2>
                <Col>
                <img src="/images/profile2.png" width={500} alt="Camila Sandoval" />
                </Col>
                <Col>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo nihil, esse optio hic modi error dolorem, inventore, officiis minima veritatis dolore assumenda saepe quisquam et at doloribus aspernatur enim?
                </Col>
            </Row>
        </Container>
    )
}