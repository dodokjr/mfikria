import { React, useState } from "react";
import { Col, CardGroup, Card, Row } from "react-bootstrap";
import LikeButton from "./LikeButton";
import Me from "../../Assets/me.webp";
import Milly from "../../Assets/milly-anime.gif";
import Shikimori from "../../Assets/shiki-mori-shikimoris-not-just-cute.gif"

const Galery = () =>
{
     return (
          <Row xs={2} md={1} className="g-4">
               <CardGroup>
                    <Col md={4}>
                         <Card className="project-card-view">
                              <Card.Img variant="top" src={Me} />
                              <Card.Body>
                                   <Card.Title>1</Card.Title>
                                   <Card.Text>
                                        Foto Gabut
                                   </Card.Text>
                                   <LikeButton />
                              </Card.Body>
                              <Card.Footer>
                                   <small className="text-muted"></small>
                              </Card.Footer>
                         </Card>
                    </Col>
                    <Col md={4}>
                         <Card className="project-card-view">
                              <Card.Img variant="top" src={Milly} />
                              <Card.Body>
                                   <Card.Title>2</Card.Title>
                                   <Card.Text>
                                        Anime BerGoyang
                                   </Card.Text>
                                   <LikeButton />
                              </Card.Body>
                              <Card.Footer>
                                   <small className="text-muted"></small>
                              </Card.Footer>
                         </Card>
                    </Col>
                    <Col md={4}>
                         <Card className="project-card-view">
                              <Card.Img variant="top" src={Shikimori} />
                              <Card.Body>
                                   <Card.Title>3</Card.Title>
                                   <Card.Text>
                                        ppp
                                   </Card.Text>
                                   <LikeButton />
                              </Card.Body>
                              <Card.Footer>
                                   <small className="text-muted"></small>
                              </Card.Footer>
                         </Card>
                    </Col>
               </CardGroup>
          </Row>
     )
}


export default Galery