import { React, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const NoInternetConnection = (props) =>
{
    const [isOnline, setOnline] = useState(true);
    useEffect(() =>
    {
        setOnline(navigator.onLine)
    }, [])
    window.addEventListener('online', () =>
    {
        setOnline(true)
    });

    window.addEventListener('offline', () =>
    {
        setOnline(false)
    });
    if (isOnline)
    {
        return (
            props.children
        )
    } else
    {
        return (

            <Container fluid className="project-section ">
                <Container>
                    <div className='text-center'>
                        <h1 className=' text-black fx-5'>NoInternetConnection</h1>
                        <span className=' text-black'>Please Check Your Internet.</span>
                    </div>
                </Container>
            </Container>
        )
    }
}

export default NoInternetConnection;