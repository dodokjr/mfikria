import React from "react";
import { Card, Container, Image, ListGroup } from "react-bootstrap";
import Me from '../../Assets/me.webp';
// import { FaLocationDot } from 'react-icons/fa'


const Cv = () =>
{
    return (
        <>
            <Card>
                <Card.Header>Cv mfikria</Card.Header>
                <Card.Body className="text-center">
                    <Image src={Me} roundedCircle width={100} height={100} />
                    <h3 className="text-justify">   Muhammad Fikri Ardiyansah</h3>
                    <p>Devloper</p>
                    <Card.Footer>
                        <ListGroup variant="flush">
                            <ListGroup.Item> Semarang, Indonesia</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cv