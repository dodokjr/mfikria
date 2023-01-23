import { React, useState, useEffect } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';
import { Link } from "react-router-dom";
import Contact from "./Contact";
import DatePeker from "./DatePaker";


const UpdateList = () =>
{
    let time = new Date().toLocaleTimeString()

    const [ctime, setTime] = useState(time)
    const UpdateTime = () =>
    {
        time = new Date().toLocaleTimeString()
        setTime(time)
    }
    setInterval(UpdateTime)
    return (
        <>
            <Container fluid className="update">
                <Container>
                    <h1 className="project-heading">
                        My Update <strong className="purple">Website </strong>
                    </h1>
                    <div className="text-center time">{ctime}</div>
                    <hr />
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 10 }).map((_, idx) => (
                            <Col md={2}>
                                <Card className="text-center">
                                    <Card.Header>Update Featured</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Video</Card.Title>
                                        <Card.Text>
                                            Masih dalam Perbaikan
                                        </Card.Text>
                                        <Link to='/video' className="btn btn-primary">Video</Link>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
            <DatePeker />
            <hr />
            <Contact />
        </>
    )
}

export default UpdateList;