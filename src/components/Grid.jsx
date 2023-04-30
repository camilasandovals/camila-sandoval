import CardGrid from "./CardGrid";
import data from "../data/portfolio.json"
import { Row, Col } from 'react-bootstrap';

export default function Grid() {
  return (
    <section className="portfolio">
        <h2>Portfolio</h2>
        <Row xs={1} md={3} lg= {4}>
            {data.map((item) => (
            <Col key={item.id}>
                {item ? <CardGrid item={item} /> : <p>Loading</p>}
            </Col>
            ))}
        </Row>
    </section>
  )
}