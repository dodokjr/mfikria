import React from "react";
import Ratio from "react-bootstrap/Ratio"

const Ytplayer = () => {
    return(
        <Ratio aspectRatio={1 / 2}>
        <iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=PLNllwEG2qsMZjaKEwusRm1v3mJqrh0s_z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Ratio>
    )
}

export default Ytplayer;