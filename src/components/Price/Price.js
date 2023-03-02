import { React, useEffect } from "react";
import { Container, Row, Card, Col, ListGroup } from "react-bootstrap";
import Contact from "../Contact";

const Price = () =>
{
    useEffect(() =>
    {
        document.title = "MfikriA | Price";
    });
    return (
        <>
            <Container fluid className="price">
                <Container>
                    <h1 className="project-heading">
                        My Price
                    </h1>
                    <hr />
                    <Row xs={1} md={3} className="g-4">
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Low</Card.Header>
                                <Card.Body>
                                    <Card.Title>$10</Card.Title>
                                    <Card.Text>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>Data Analist</ListGroup.Item>
                                            <ListGroup.Item>Front end Devloper</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer className="text-muted">Contact Me</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Medium Price</Card.Header>
                                <Card.Body>
                                    <Card.Title>$15</Card.Title>
                                    <Card.Text>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>Data Analist</ListGroup.Item>
                                            <ListGroup.Item>Frontend and Backend</ListGroup.Item>
                                            <ListGroup.Item>Full Maintenance</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer className="text-muted">Contact Me</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Hard Price</Card.Header>
                                <Card.Body>
                                    <Card.Title>$20</Card.Title>
                                    <Card.Text>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>Data Analist</ListGroup.Item>
                                            <ListGroup.Item>Frontend and Backend</ListGroup.Item>
                                            <ListGroup.Item>Full  Maintenance</ListGroup.Item>
                                            <ListGroup.Item>Full Language Code</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer className="text-muted">Contact Me</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Contact />
        </>
    )
}


export default Price 