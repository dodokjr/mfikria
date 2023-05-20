import { React, useState } from 'react';
import { AddToList } from './AddtoList';
import { CardGroup, Container, Card, Col, Button, ListGroup } from 'react-bootstrap';


export const AnimeList = ({ animelist, setAnimeInfo, animeComponent, handleList }) =>
{
    const AddToList = animeComponent;
    return (
        <>
            {
                animelist ? (
                    animelist.map((anime, index) =>
                    {
                        return (
                            <>
                                <Col md={4}>
                                    <div key={index} onClick={() => setAnimeInfo(anime)} className="item">
                                        <Card>
                                            <p>{anime.mal_id}</p>
                                            <Card.Img variant="top" src={anime.images.webp.large_image_url} alt="card-img" />
                                            <Card.Body>
                                                <Card.Title>{anime.title}</Card.Title>
                                                <Card.Text style={{ textAlign: "justify" }}>
                                                    {anime.synopsis}
                                                </Card.Text>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroup.Item>#Score: {anime.score}</ListGroup.Item>
                                                    <ListGroup.Item>Episode: {anime.episodes}</ListGroup.Item>
                                                    <ListGroup.Item>Status: {anime.status}</ListGroup.Item>
                                                    <ListGroup.Item>season: {anime.season}</ListGroup.Item>
                                                </ListGroup>
                                                <Button variant="primary" href={anime.url} target="_blank">
                                                    myanimelist.net &nbsp;
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    href={anime.trailer.url}
                                                    target="_blank"
                                                    style={{ marginLeft: "10px" }}
                                                > Youtube&nbsp;
                                                </Button>
                                            </Card.Body>
                                            <small>{anime.year}</small>
                                        </Card>
                                    </div>
                                </Col>
                            </>
                        )
                    })
                ) : "Anime Yang Anda Cari Tidak Ada"
            }

        </>
    )
}
