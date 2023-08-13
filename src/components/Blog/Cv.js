import React, { useEffect, useState } from "react";
import { Card, CardGroup, Container, Image, ListGroup, ListGroupItem, ProgressBar, Col, Row } from "react-bootstrap";
import Me from '../../Assets/me.webp';
import { BiLocationPlus, BiPhoneCall } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import
{
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaDiscord, FaSteam } from "react-icons/fa";


const Cv = () =>
{
    const [items, setItems] = useState([])
    const [url] = useState("https")
    useEffect(() =>
    {
        const fetchRepos = async () =>
        {
            const res = await fetch(
                'https://api-mfikria.vercel.app/link/'
            )
            const data = await res.json()
            setItems(data)
        }

        fetchRepos()
    }, [url])
    return (
        <>
            <Card border="primary">
                <Card.Header>Cv mfikria</Card.Header>
                <Card.Body className="text-center">
                    <Image src={Me} roundedCircle width={100} height={100} />
                    <h3 className="text-justify">   Muhammad Fikri Ardiyansah</h3>
                    <p>Devloper</p>
                    <Card.Footer>
                        <ListGroup variant="flush">
                            <ListGroup.Item><BiLocationPlus /> Semarang, Indonesia</ListGroup.Item>
                            <ListGroup.Item><BiPhoneCall /> +62 8572 7738 629</ListGroup.Item>
                            <ListGroup.Item><FiMail /> ffikri604@gmail.com</ListGroup.Item>
                        </ListGroup>
                    </Card.Footer>
                    <hr />
                    <Card.Text>
                        <p>Masih Pelajar di Sma Agus Salim Semarang </p>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <div>
                        <h5 className="text-center">Skill</h5>
                        <ProgressBar animated variant="success" now={85} label='html' />
                        <ProgressBar animated variant="danger" now={80} label='css' />
                        <ProgressBar animated variant="info" now={78} label='Javascript' />
                        <ProgressBar animated variant="success" now={75} label='Ract' />
                    </div>
                    <hr />
                    <div className="text-center">
                        <h4>Riwayat pendidikan (Education)</h4>
                        <blockquote className="blockquote mb-1">
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>
                                    <p>
                                        Sd Tunas Harapan Semarang (Islamic Primary School Tunas Harapan)
                                    </p>
                                    <footer className="blockquote-footer">
                                        Jul 2011 - Jun 2016
                                    </footer>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p>
                                        MtsN 1 Semarang (Madrasah Tsanawiyah Negeri 1 Semarang)
                                    </p>
                                    <footer className="blockquote-footer">
                                        Jul 2016 - Jun 2019 (drop out)
                                    </footer>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p>
                                        Mts taqwal ilah Semarang (Madrasah Tsanawiyah taqwal ilah Semarang)
                                    </p>
                                    <footer className="blockquote-footer">
                                        Jul 2020 - Jun 2021 (passed)
                                    </footer>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p>
                                        Sma Agus Salim Semarang
                                    </p>
                                    <footer className="blockquote-footer">
                                        Jul 2021 -
                                    </footer>
                                </ListGroup.Item>
                            </ListGroup>
                        </blockquote>
                        <hr />
                        <div>
                            <h4>Informal Education (pendidikan Informal)</h4>
                            <blockquote className="blockquote mb-1">
                                <ListGroup>
                                    <ListGroup.Item>
                                        <p></p>
                                    </ListGroup.Item>
                                </ListGroup>
                            </blockquote>
                        </div>
                        <div>
                            <h4>Bahasa dan hobi</h4>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>
                                    <h6>Bahasa</h6>
                                    <ProgressBar animated variant='info' now={90} label='Bahasa Indonesia' />
                                    <ProgressBar animated variant='danger' now={65} label='Bahasa Inggris' />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h6>Hobi</h6>
                                    <strong>Komputer, Traveling, Gaming</strong>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="footer">
                    <Row>
                        <Col md="4" style={{ color: 'black' }}>
                            <h3>CV MFikria</h3>
                        </Col>
                        <Col md="4" className="footer-body">
                            <ul className="footer-icons">
                                <li className="social-icons">
                                    <a
                                        href={items.github}
                                        style={{ color: "black" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href={items.linkedin}
                                        style={{ color: "black" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href={items.instagram}
                                        style={{ color: "black" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillInstagram />
                                    </a>
                                </li>
                                <li className="social-icons" >
                                    <a
                                        href={items.discord}
                                        style={{ color: "black" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaDiscord />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href={items.youtube}
                                        style={{ color: "black" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillYoutube />
                                    </a>
                                </li>
                                <li className="social-icons">
                                    <a
                                        href={items.steam}
                                        style={{ color: "black" }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaSteam />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </>
    )
}

export default Cv