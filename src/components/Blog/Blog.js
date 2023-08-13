import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Imges from '../../Assets/logo.png';


const Blog = () =>
{
    return (
        <>
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading">
                        My  <strong className="purple">Blog </strong>
                    </h1>
                    <p style={{ color: "white" }}>
                        Blog Hare
                    </p>

                    <Row>
                        <Col md={4} className="project-card">
                            <Card className="project-card-view">
                                <Card.Img variant="top" src={Imges}
                                    alt='imgaes' />
                                <Card.Body>

                                    <Card.Title>Blog Title</Card.Title>
                                    <Card.Text>
                                        Blog Text
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Button variant="primary" as={Link} to='/blog/blogText'>
                                        Button
                                    </Button>
                                </Card.Body>
                                <Card.Footer>
                                    Blog Footer
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Blog;
