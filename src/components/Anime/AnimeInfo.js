import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const AnimeInfo = (props) =>
{
  const { title, trailer: { youtube_id, embed_url }, genres: { name }, images: { webp: { large_image_url } }, Source, rank, score, popularity, status, rating, duration, season, url, synopsis } = props.animeInfo
  return (
    <div>
      <Card style={{ width: '29rem' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={large_image_url} />
        <Card.Body>
          <Card.Text>
            {synopsis}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>#Rank: {rank}</ListGroup.Item>
          <ListGroup.Item>#Score: {score}</ListGroup.Item>
          <ListGroup.Item>#Popularity: {popularity}</ListGroup.Item>
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
    </div>
  )
}
