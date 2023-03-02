import { React, useState } from "react";
import { Col, CardGroup, Card, Row } from "react-bootstrap";
import LikeButton from "./LikeButton";

const Galery = () =>
{
     return (
          <Row xs={2} md={1} className="g-4">
               <CardGroup>
                    <Col md={4}>
                         <Card className="project-card-view">
                              <Card.Img variant="top" src="https://i.pinimg.com/736x/00/a7/19/00a7190504eea461bbce8c3b5c12dd41.jpg" />
                              <Card.Body>
                                   <Card.Title>1</Card.Title>
                                   <Card.Text>
                                        Foto Gabut
                                   </Card.Text>
                                   <LikeButton />
                              </Card.Body>
                              <Card.Footer>
                                   <small className="text-muted">Last updated 3 mins ago</small>
                              </Card.Footer>
                         </Card>
                    </Col>
                    <Col md={4}>
                         <Card className="project-card-view">
                              <Card.Img variant="top" src="https://i.pinimg.com/236x/d3/7b/d0/d37bd0f69a5ff9ca11351691d42a416e.jpg" />
                              <Card.Body>
                                   <Card.Title>2</Card.Title>
                                   <Card.Text>
                                        Anime BerGoyang
                                   </Card.Text>
                                   <LikeButton />
                              </Card.Body>
                              <Card.Footer>
                                   <small className="text-muted">Last updated 3 mins ago</small>
                              </Card.Footer>
                         </Card>
                    </Col>
                    <Col md={4}>
                         <Card className="project-card-view">
                              <Card.Img variant="top" src="https://i.pinimg.com/236x/46/63/c1/4663c1a34ec2c158551d6c85c5e7bb87.jpg" />
                              <Card.Body>
                                   <Card.Title>3</Card.Title>
                                   <Card.Text>
                                        ppp
                                   </Card.Text>
                                   <LikeButton />
                              </Card.Body>
                              <Card.Footer>
                                   <small className="text-muted">Last updated 3 mins ago</small>
                              </Card.Footer>
                         </Card>
                    </Col>
               </CardGroup>
          </Row>
     )
}


export default Galery