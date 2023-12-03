import { React, useEffect } from "react";
import { Container, Row, Card, Col, ListGroup } from "react-bootstrap";
import Contact from "../Contact";
import Cv from "./Cv";

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
                        My Price And Cv
                    </h1>
                    <Cv />
                    <hr />
                    <div className="">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/8nA-apwq0aY?si=Nufhve-sIxrLF0jb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Container>
            </Container>
            <Contact />
        </>
    )
}


export default Price 