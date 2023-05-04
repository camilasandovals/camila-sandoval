import { Col, Container, Row, Carousel, CarouselItem } from "react-bootstrap";

export default function PicCarousel () {
    return (
        <section className="section-carousel">
            <Container>
                <Row className="p-3">
                    <h2>My Recommendations</h2>
                </Row>
                <Row className="justify-content-center p-3">
                    <Col className="p-0" lg={8}> 
                        <Carousel fade className="carousel-container">
                            <Carousel.Item>
                                <div style={{padding:30}}>
                                    <img src="/images/cs2.png"
                                    alt="slide 1"/>
                                </div>
                                <div style={{padding:30}}>
                                <h2>First Item</h2>
                                <p>First item are greate because they are the best and I must learn to write better english.</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}