import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const quotes = [
    { saying: "Fall down seven times. Stand up eight.", author: "Japanese Proverb"},
    { saying: "Never stop learning.", author: "Freddy Vega"},
    { saying: "The grass is never greener on the other side", author: "Publius Ovidius Naso"},
  ]
export default function Quote() {
    const [i, setI] = useState(0)

    const nextQuote = () => {
        if(i < quotes.length -1) setI(i + 1)
        else setI(0)
      }

    return (
        <section onClick={nextQuote} className = "quote-container">
            <Container>
                <Row className="text-center">
                    <Col>
                        <h4><q>{quotes[i].saying}</q></h4>
                        <p>{quotes[i].author}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}