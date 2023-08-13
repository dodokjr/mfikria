import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cv from "./Cv";
import Imges from '../../Assets/logo.png';


const Blogt = () =>
{
    return (
        <>
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading text-center">
                        Mfikria Blog New Site Page
                    </h1>
                    <p style={{ color: "white" }} className="text-center">
                        13-08-2023  12:20
                    </p>

                    <Image src={Imges} className="rounded mx-auto d-block" />
                    <p style={{ color: 'white' }}>
                        Saya Muhammad Fikri Ardiyansah Membuat Blog ini, dibuat untuk kesengan semata dan dibuat untuk ketrampilan saya pribadi, dan untuk portofolio project saya akan saya upload dan saya documentasikan disini mohon kasih masukannya untuk saya lebih kreatif dalam dunia percodinagn ini TerimaKasih.
                        dan saya akan mendokumentasikan data diri saya sebagai cv di blog ini sebagai berikut:
                    </p>
                    <Cv />
                    <Card>
                        <Card.Header>Quote</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    posuere erat a ante.{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </>
    )
}

export default Blogt;
