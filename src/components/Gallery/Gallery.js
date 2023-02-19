import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Card, Container } from 'react-bootstrap'

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
                         <Col md={4}>
                              <Card>
                                   <Card.Img variant="top" src='https://i.pinimg.com/736x/00/a7/19/00a7190504eea461bbce8c3b5c12dd41.jpg' width={90} />
                                   <Card.Body>
                                        <Card.Title>{items.data.One.title}</Card.Title>
                                        <Card.Text>
                                             {items.data.One.des}
                                        </Card.Text>
                                   </Card.Body>
                              </Card>
                         </Col>
                         <Col md={4}>
                              <Card>
                                   <Card.Img variant="top" src='https://i.pinimg.com/236x/d3/7b/d0/d37bd0f69a5ff9ca11351691d42a416e.jpg' width={90} />
                                   <Card.Body>
                                        <Card.Title>{items.data.Two.title}</Card.Title>
                                        <Card.Text>
                                             {items.data.Two.des}
                                        </Card.Text>
                                   </Card.Body>
                              </Card>
                         </Col>
                         <Col md={4}>
                              <Card>
                                   <Card.Img variant="top" src='https://i.pinimg.com/236x/46/63/c1/4663c1a34ec2c158551d6c85c5e7bb87.jpg' width={90} />
                                   <Card.Body>
                                        <Card.Title>{items.data.Three.title}</Card.Title>
                                        <Card.Text>
                                             {items.data.Three.des}
                                        </Card.Text>
                                   </Card.Body>
                              </Card>
                         </Col>
                    </Row>
               </Container>
          </Container>
     )
}


export default Gallery;