import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import Idol from "../../Assets/logo.png"
import Va from "../../Assets/Video/DJ Nirvana x Spin Back Slow Bass dj Tiktok Terbaru 2022_v240P.mp4"

const Video = () =>
{
    useEffect(() =>
    {
        document.title = "MFikriA  | Video";
    });
    return (
        <>
            <Container fluid className="video">
                <Player
                    playsInline
                    width={350}
                    poster={Idol}
                    src={Va}
                />
            </Container>
        </>
    )
}

export default Video;