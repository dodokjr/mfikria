import { React, useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
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
                    <Row xs={1} md={4} className="g-4">
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Musik dan Video</Card.Title>
                                    <Card.Text>
                                        Ada penambahan Fitur <Link to='/video'>#Video</Link> dan <Link to='/music'>#Music</Link>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">22 / 01 / 2023</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Desain</Card.Title>
                                    <Card.Text>
                                        Ada penambahan fitur kecil + ada Update dari Github repositories
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">24 / 01 / 2023</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Calculator Dan Hal-hal kecil seperti penghapusan background</Card.Title>
                                    <Card.Text>
                                        <Link to='/projectgabut/calculator'>#Calculator</Link> Yang tersedia saat ini masih Berjalan Silahkan diGunakan Selamat Menikmati
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">27 / 01 / 2023</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Benerin Bug dan Desain</Card.Title>
                                    <Card.Text>
                                        Bug and Desain
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">28 / 01 / 2023</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Add Api Rest</Card.Title>
                                    <Card.Text>
                                        Api Rest Github
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">29 / 01 / 2023</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Crypto</Card.Title>
                                    <Card.Text>
                                        New App <Link to='/projectgabut/coin'>#Crypto</Link>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">03 / 02 / 2023</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Benerin Bug, Desain Serta Mempersingkat api</Card.Title>
                                    <Card.Text>
                                        Bug, Desain, Serta Mempersingkat api
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">05 / 02 / 2023</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Memperbarui Tampilan Anime Card</Card.Title>
                                    <Card.Text>
                                        Memperbarui
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">18 / 02 / 2023</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Url Menghilang dan berkurangnya lagu</Card.Title>
                                    <Card.Text>
                                        Memperbarui url <Link to='/anime'>#Anime</Link>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">07 / 04 / 2023</Card.Footer>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="text-center">
                                <Card.Header>Update Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Seacrh</Card.Title>
                                    <Card.Text>
                                        add url <Link to='/projectgabut/Seacrh'>#Seacrh Google</Link>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">07 / 04 / 2023</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <hr />
                    <DatePeker />
                    <hr />
                    <Contact />
                </Container>
            </Container>
        </>
    )
}

export default UpdateList;