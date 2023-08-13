import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Imges from '../../Assets/cvs.png';


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

                                    <Card.Title>Mfikria Cv By React and bootstrap</Card.Title>
                                    <Card.Text>
                                        Saya Muhammad Fikri Ardiyansah Membuat Blog ini, dibuat untuk kesengan semata dan dibuat untuk ketrampilan saya pribadi, dan untuk portofolio project saya akan saya upload dan saya documentasikan disini mohon kasih masukannya untuk saya lebih kreatif dalam dunia percodinagn ini TerimaKasih.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Button variant="primary" as={Link} to='/blog/blogText'>
                                        Cv Mfikria Di blog
                                    </Button>
                                </Card.Body>
                                <Card.Footer>
                                    #CVMFIKRIA
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
