import React, { useRef, useState } from 'react';
import './video-player.css';
import { FaPlay, FaPause } from "react-icons/fa";
import { Button } from 'react-bootstrap';


const VideoPlayer = ({vs}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    const handlePlayPause = () => {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    };
    return(
        <div className="video-player">
        <video
          ref={videoRef}
          src={vs}
          width={350}
          height={350}
        />
        <div className="controls">
          <Button variant="light" onClick={handlePlayPause}>{isPlaying ? <FaPause/> : <FaPlay /> }</Button>
        </div>
      </div>
    )
}


export default VideoPlayer