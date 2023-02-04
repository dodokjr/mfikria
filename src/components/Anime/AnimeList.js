import { React, useState } from 'react';
import { AddToList } from './AddtoList';
import { CardGroup, Container, Card, Col, Button } from 'react-bootstrap';


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
                                        <CardGroup>
                                            <Card className="project-card-view">
                                                <Card.Img variant="top" src={anime.images.webp.large_image_url} alt="card-img" />
                                                <Card.Body>
                                                    <Card.Title>{anime.title}</Card.Title>
                                                    <Card.Text style={{ textAlign: "justify" }}>
                                                        {anime.synopsis}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                        <AddToList />
                                    </div>
                                </Col>
                            </>
                        )
                    })
                ) : "Not Found"
            }

        </>
    )
}
