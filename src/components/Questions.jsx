import { Col, Container, Row } from "react-bootstrap";

export default function Questions() {
    return (
        <section>
            <Container>
                <Row>
                    <Col sm={12} md={4} lg={4}>
                        <h3 style={{color:"#ff47a9"}}>Why I chose Bocacode?</h3>
                        <p>  For its dedication to diversity and inclusion, welcoming students from all ethnic backgrounds, furthermore, the program is taught by highly experienced and patient senior instructors who provide invaluable personalized guidance, ensuring that students are well-prepared for success in the field of software engineering.</p>
                    </Col>

                    <Col sm={12} md={4} lg={4}>
                        <h3 style={{color:"#ff47a9"}}>Exciting Project?</h3>
                            <p>I am excited about the prospect of creating a social media application exclusively for me and my friends. This private platform would prioritize security and privacy, free from any intrusive advertisements, and would provide a personalized space for us to share our experiences and connect with each other. </p>
                    </Col>

                    <Col sm={12} md={4} lg={4}>
                        <h3 style={{color:"#ff47a9"}}>Ideal Work Place?</h3>
                        <p>My ideal work environment would be within the healthcare or medical industry, where I can use my biomedical engineering skills to help others. Additionally, it is important to me that the workplace is inclusive, fostering a collaborative and creative culture that celebrates diversity and encourages personal and professional growth.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}