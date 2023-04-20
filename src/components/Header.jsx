import { Col, Container, Row } from "react-bootstrap";

export default function Header () {
    return(
        <header>
            <Container>
                <Row className="text-center">
                    <Col>
                        <p className="mt-5"> 👋 HELLO, I AM </p>
                        <h1>Camila</h1>
                        
                    </Col>
                    <Col>
                        <img src="https://picsum.photos/seed/picsum/500/500" alt="image" />
                
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </header>
    )
}