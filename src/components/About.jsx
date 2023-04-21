import { Col, Container, Row } from "react-bootstrap";

export default function About() {
    return(
        <section className="about-container">
        <Container>
            <Row className="text-center">
                <h2 className="m-5 text-center">About me</h2>
                <Col>
                <img src="/images/profile2.png" width={500} alt="Camila Sandoval" />
                </Col>
                <Col>
                <h3>MY INTRO</h3>
                <h4>I am <span style={{fontWeight:'740'}}>Camila Sandoval.</span></h4>
                    
                 <h3 style={{color:"gray" }}>Full Stack Developer based in the US.</h3> 
                <Row>
                <p>I specialize in designing and developing modern websites, with a focus on backend development for clients of all sizes. My passion is to solve complex problems in an efficient manner while creating bold and meaningful interfaces for digital user experiences.
                Collaborating with new people is one of my favorite things to do. </p>              
                </Row>   

                <Row>
                    <p>I love learning from and working with others on exciting projects.</p>                 
                </Row> 

                </Col>
            </Row>
        </Container>
        </section>
    )
}