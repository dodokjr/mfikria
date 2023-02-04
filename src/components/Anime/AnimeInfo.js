import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import VideoAnime from './VideoAnime';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

export const AnimeInfo = (props) =>
{
  const { title, trailer: { youtube_id, embed_url }, genres: { name }, images: { webp: { large_image_url } }, Source, rank, score, popularity, status, rating, duration, season, url, synopsis } = props.animeInfo
  return (
    <Card style={{ width: '24rem' }}>
      <Card.Title>{title} #{rank}</Card.Title>
      <Card.Img variant="top" src={large_image_url} />
      <Card.Body>
        <Card.Text>
          {synopsis}
        </Card.Text>
      </Card.Body>
      <iframe width="385" height="315" src={embed_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>#Score: {score}</ListGroup.Item>
        <ListGroup.Item>genres: {name}</ListGroup.Item>
        <ListGroup.Item>Source:{Source}</ListGroup.Item>
        <ListGroup.Item>Duration:{duration}</ListGroup.Item>
        <ListGroup.Item>Status:{status}</ListGroup.Item>
        <ListGroup.Item>Rating:{rating}</ListGroup.Item>
        <ListGroup.Item>season:{season}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href={embed_url} target="_blank">{youtube_id}</Card.Link>
        <Card.Link href={url} target="_blank">{title}</Card.Link>
      </Card.Body>
    </Card>
  )
}
