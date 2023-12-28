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