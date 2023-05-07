import { Col, Container, Row, Carousel, CarouselItem } from "react-bootstrap";

export default function PicCarousel () {
    return (
        <section className="section-carousel">
            <Container>
                <Row className="p-3">
                    <h2>RECOMMENDATIONS</h2>
                </Row>
                <Row className="justify-content-center p-3">
                    <Col className="p-0" lg={8}> 
                        <Carousel fade className="carousel-container">
                            <Carousel.Item>
                                <div style={{padding:30}}>
                                    <img src="https://media.licdn.com/dms/image/D4E03AQHQC1769U2DdA/profile-displayphoto-shrink_400_400/0/1675974455444?e=1688601600&v=beta&t=DCJ2fN4DXkkDJkSRpt1loz5Tqo2R1kSwhvL6zgdB-zs"
                                    alt="slide 1"/>
                                </div>
                                <div style={{padding:30}}>
                                <h3>First Item</h3>
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