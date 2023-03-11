import { React, useState, useEffect } from "react";
import { Col, CardGroup, Card, Row } from "react-bootstrap";
import LikeButton from "./LikeButton";
import Me from "../../Assets/me.webp";
import Milly from "../../Assets/milly-anime.gif";
import Shikimori from "../../Assets/shiki-mori-shikimoris-not-just-cute.gif"
import Data from "./Data";

const Galery = () =>
{
     const [showMore, setShowMore] = useState(false);
     const { text } = Data;
     const [items, setItems] = useState([])
     const [user] = useState('mfikria');
     useEffect(() =>
     {
          const fetchRepos = async () =>
          {
               const res = await fetch(
                    'https://api-mfikria.vercel.app/like'
               )
               const data = await res.json()
               setItems(data)
          }

          fetchRepos()
     }, [user])
     return (
          <Row xs={2} md={1} className="g-4">
               <CardGroup>
                    <Col md={4}>
                         <Card className="project-card-view">
                              <Card.Img variant="top" src={items.one} />
                              <Card.Body>
                                   <Card.Title>1</Card.Title>
                                   <Card.Text>
                                        <Data />
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
                              <Card.Img variant="top" src={items.two} />
                              <Card.Body>
                                   <Card.Title>2</Card.Title>
                                   <Card.Text>
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
                              <Card.Img variant="top" src={items.three} />
                              <Card.Body>
                                   <Card.Title>3</Card.Title>
                                   <Card.Text>
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