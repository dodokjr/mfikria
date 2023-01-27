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

    useEffect(() =>
    {
        document.title = "MfikriA | UpdateList"
    });

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
                        <Col md={2}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Musik dan Video</Card.Title>
                                    <Card.Text>
                                        Ada penambahan Fitur video dan musik
                                    </Card.Text>
                                    <Link to='/video' className="btn btn-primary">Video</Link>
                                    <Link to='/music' className="btn btn-primary">Music</Link>
                                </Card.Body>
                                <Card.Footer className="text-muted">22 / 01 / 2023</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={2}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Desain</Card.Title>
                                    <Card.Text>
                                        Ada penambahan fitur kecil + ada Update dari Github repositories
                                    </Card.Text>
                                    <Link to='/' className="btn btn-primary">New Update</Link>
                                </Card.Body>
                                <Card.Footer className="text-muted">24 / 01 / 2023</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={2}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Calculator Dan Hal-hal kecil seperti penghapusan background</Card.Title>
                                    <Card.Text>
                                        Calculator Yang tersedia saat ini masih Berjalan Silahkan diGunakan Selamat Menikmati
                                    </Card.Text>
                                    <Link to='/projectgabut/calculator' className="btn btn-primary">Calculator</Link>
                                </Card.Body>
                                <Card.Footer className="text-muted">22 / 01 / 2023</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <DatePeker />
            <hr />
            <div>
                <Link to="/music" className="btn btn-link">Music</Link>
                <Link to="/video" className="btn btn-link">Video</Link>
                <Link to='/projectgabut/calculator' className="btn btn-link">Calculator</Link>
            </div>
            <Contact />
        </>
    )
}

export default UpdateList;