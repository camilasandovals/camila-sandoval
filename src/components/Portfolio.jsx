import { Container, Row, Col } from "react-bootstrap"
import data from "../data/portfolio.json"
import Panel from "./Panel"

export default function Portfolio() {
    return(
            <section className="portfolio">
                <Container id="gallery">
                    <Row className="justify-content-center">
                        <Col className="text-center"><h2>My Portfolio</h2></Col>
                    </Row>

                    <Row>
                    {
                        data.map( 
                            (element) => (
                                element
                                ? <Panel data={element}/>
                                : <p>Loading...</p>
                            )
                        )
                    }
                    </Row>
                </Container>

            </section>
    )
}