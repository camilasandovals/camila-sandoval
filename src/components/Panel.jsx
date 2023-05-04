import { Col, Card, Image } from "react-bootstrap";

export default function Panel({data: {id, name, cover, about, website}}) {
    return(
            <Col key={id} sm={12} md={6} lg={3}>
                <Card className="card">
                    <figure>
                        <Image src={cover} fluid />
                    </figure>

                    <div className="content">
                        <h3>{name}</h3>
                        <p>{about}</p>
                    </div>
                </Card>
            </Col>
    )
}