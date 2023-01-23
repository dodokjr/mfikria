import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, Container } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

function DatePeker()
{
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) =>
    {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <>
            <Container>
                <Col md="auto">
                    <DatePicker
                        className="center"
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        selectsRange
                        inline
                    />
                </Col>
            </Container>
        </>
    )
}

export default DatePeker;