import { Col, Card, Image } from "react-bootstrap";

export default function Panel({data: {id, name, cover, about, website}}) {
    return(
            <Col style={{padding:30}} key={id} sm={12} md={6} lg={3} className="button-effect">
                <a href={website}>
                <Card className="card">
                    
                    <figure>
                        <Image src={cover} fluid />
                    </figure>

                    <div className="content">
                        <h3>{name}</h3>
                        <p>{about}</p>
                    </div>
                </Card>
                </a>
            </Col>
    )
}