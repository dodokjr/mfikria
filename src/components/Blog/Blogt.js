import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cv from "./Cv";
import Contact from '../Contact'
import Imges from '../../Assets/logo.png';


const Blogt = () =>
{
    return (
        <>
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading text-center">
                        Mfikria Cv Blog
                    </h1>
                    <p style={{ color: "white" }} className="text-center">
                        13-08-2023  12:20
                    </p>

                    <Image src={Imges} className="rounded mx-auto d-block" />
                    <p style={{ color: 'white' }}>
                        Saya Muhammad Fikri Ardiyansah Membuat Blog ini, dibuat untuk kesengan semata dan dibuat untuk ketrampilan saya pribadi, dan untuk portofolio project saya akan saya upload dan saya documentasikan disini mohon kasih masukannya untuk saya lebih kreatif dalam dunia percodinagn ini TerimaKasih.
                        dan saya akan mendokumentasikan data diri saya sebagai cv di blog ini sebagai berikut:
                    </p>
                    <hr />
                    <Cv />
                    <hr />
                    <p style={{ color: 'white' }}>
                        Di atas adalah cv saya berupa project yang saya lakukan dalam hidup ini semogga terbantu dalam pengalaman saya TerimaKasih Yang sudah melihat cv saya.
                        dan Bisa Contact saya dibawah ini
                    </p>
                    <Contact />
                </Container>
            </Container>
        </>
    )
}

export default Blogt;
