import { useState, useEffect } from "react"
import Loading from "./Loading"
import Profile from "./Profile"
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";


function GithubApi() {
  const [items, setItems] = useState([])
  // Change this to any username whose repositories you want to get
  const [user] = useState("dodokjr")

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=6&sort=updated`
      )
      const data = await res.json()
      setItems(data)
    }

    fetchRepos()
  }, [user])

  return (
    <>
      <h1 className="project-heading">
          My repos Github <strong className="purple">{user} </strong>
        </h1>
        <p style={{ color: "white" }}>
          Project Hare
        </p>

      {!items ? (
        <Loading />
      ) : (
       <Container>
         <Row>
            {items.map((item) => (
            <Col  md={4} className="project-card">
            <Profile key={item.id} {...item} />
            </Col>
          ))}
        </Row>
       </Container>
      )}
    </>
  )
}

export default GithubApi