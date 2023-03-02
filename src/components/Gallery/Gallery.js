import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Card, Container, CardGroup } from 'react-bootstrap'

const Gallery = () =>
{
     const [items, setItems] = useState([])
     const [user] = useState('mfikria');
     useEffect(() =>
     {
          const fetchRepos = async () =>
          {
               const res = await fetch(
                    'http://localhost:5000/media-url/img'
               )
               const data = await res.json()
               setItems(data)
          }

          fetchRepos()
     }, [user])
     console.warn(items.data)

     return (
          <Container fluid className="update">
               <Container>
                    <h1 className="project-heading">
                         My Gallery <strong className="purple">Website {user} </strong>
                    </h1>
                    <hr />
                    <Row xs={1} md={2} className="g-4">
                         <CardGroup>
                              <Col md={4}>
                                   <Card>
                                        <Card.Img variant="top" src="https://i.pinimg.com/736x/00/a7/19/00a7190504eea461bbce8c3b5c12dd41.jpg" />
                                        <Card.Body>
                                             <Card.Title>Card title</Card.Title>
                                             <Card.Text>
                                                  This is a wider card with supporting text below as a natural lead-in
                                                  to additional content. This content is a little bit longer.
                                             </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                             <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                   </Card>
                              </Col>
                              <Col md={4}>
                                   <Card>
                                        <Card.Img variant="top" src="https://i.pinimg.com/236x/d3/7b/d0/d37bd0f69a5ff9ca11351691d42a416e.jpg" />
                                        <Card.Body>
                                             <Card.Title>Card title</Card.Title>
                                             <Card.Text>
                                                  This is a wider card with supporting text below as a natural lead-in
                                                  to additional content. This content is a little bit longer.
                                             </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                             <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                   </Card>
                              </Col>
                              <Col md={4}>
                                   <Card>
                                        <Card.Img variant="top" src="https://i.pinimg.com/236x/46/63/c1/4663c1a34ec2c158551d6c85c5e7bb87.jpg" />
                                        <Card.Body>
                                             <Card.Title>Card title</Card.Title>
                                             <Card.Text>
                                                  This is a wider card with supporting text below as a natural lead-in
                                                  to additional content. This content is a little bit longer.
                                             </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                             <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                   </Card>
                              </Col>
                         </CardGroup>
                    </Row>
               </Container>
          </Container>
     )
}


export default Gallery;