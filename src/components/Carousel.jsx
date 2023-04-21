import { Col, Container, Row, Carousel, CarouselItem } from "react-bootstrap";

export default function PicCarousel () {
    return (
        <section>
            <Container className="carousel-container">
                <Row>
                    <Col className="p-0"> 
                        <Carousel fade>
                            <Carousel.Item>
                                <img src="/images/pic1.png"
                                className="d-block w-100"
                                alt="slide 1" />
                                <Carousel.Caption>
                                <h2>First Item</h2>
                                <p>First item are greate because they are the best and I must learn to write better english.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="/images/pic2.png" 
                                className="d-block w-100"
                                alt="" />
                            <Carousel.Caption>
                                <h2>Second Item</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam delectus, eveniet eius corporis, distinctio quis earum non illum numquam atque culpa odio? Et adipisci similique laudantium alias? Minus, reiciendis!</p>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img src="/images/pic3.png" 
                                className="d-block w-100"
                                alt="" />
                                <Carousel.Caption>
                                    <h2>Third Item</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet maxime minima tenetur repellat saepe natus provident suscipit eum deserunt, nihil illo assumenda nisi, ab velit distinctio, praesentium dolorem quis similique.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}