import React, { useEffect } from "react";
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

export const VideoAnime = (props) =>
{
     const { title, trailer: { embed_url } } = props.animeInfo
     return (
          <Player
               playsInline
               width={350}
               poster="/assets/logo.png"
               src={embed_url}
          />
     )
}

export default VideoAnime;