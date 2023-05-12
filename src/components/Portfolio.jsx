import { Container, Row, Col } from "react-bootstrap"
import data from "../data/portfolio.json"
import Panel from "./Panel"

export default function Portfolio() {
    return(
            <section className="portfolio">
                <Container id="gallery">
                    <Row className="justify-content-center">
                        <Col className="text-center"><h2>MY PORTFOLIO</h2></Col>
                    </Row>
                    


                    {/*  BAR TO SELECT PROJECTS  
                    
                    <Row className="justify-content-center">
                        <Col  sm={6}>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Full Stack Development</option>
                            <option value="1">Mobile development</option>
                            <option value="2">Machine Learning</option>
                           
                        </select>
                        </Col>
                        
                    </Row> */}

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