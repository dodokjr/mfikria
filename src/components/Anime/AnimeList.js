import React from 'react';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AddToList } from './AddtoList';
import { CardGroup } from 'react-bootstrap';


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
                                <Col md={4}>
                                <div key={index} onClick={() => setAnimeInfo(anime)}>
                                  <CardGroup>
                                  <Card className="project-card-view">
                                  <Card.Img variant="top" src={anime.images.jpg.large_image_url} alt="card-img" />
                                   <Card.Body>
                                      <Card.Title>{anime.title}</Card.Title>
                                        <Card.Text style={{ textAlign: "justify" }}>
                                            {anime.synopsis}
                                               </Card.Text>
                                        </Card.Body>
                                  </Card>
                                  </CardGroup>
                            </div>
                                </Col>
                        )
                    })
                ) : "Not Found"
            }

        </>
    )
}
