import { Col, Container, Row, Carousel, CarouselItem } from "react-bootstrap";

export default function PicCarousel () {
    return (
        <section>
            <Container className="carousel-container">
                <Row>
                    <Col className="p-0"> 
                        <Carousel fade>
                            <Carousel.Item>
                                <img src="/images/pic.png"
                                className="d-block w-100 carousel-img"
                                alt="slide 1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/images/pic1.png"
                                className="d-block w-100 carousel-img"
                                alt="slide 1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/images/pic2.png" 
                                className="d-block w-100 carousel-img"
                                alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/images/pic3.png" 
                                className="d-block w-100 carousel-img"
                                alt="" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/images/pic4.JPG"
                                className="d-block w-100 carousel-img"
                                alt="slide 1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/images/pic5.JPG"
                                className="d-block w-100 carousel-img"
                                alt="slide 1" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}