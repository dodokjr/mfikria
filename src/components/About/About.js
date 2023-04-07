import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ProfileGithub from "./ProfileGithub";
import { AiFillEye } from 'react-icons/ai'

function About()
{
  const [profile, setProfile] = useState([])
  const [user] = useState("dodokjr")

  useEffect(() =>
  {
    const fetchProfile = async () =>
    {
      const res = await fetch(
        `https://api-mfikria.vercel.app/v2/github/${user}`
      )
      const data = await res.json()
      setProfile(data)
    }

    fetchProfile()
  }, [user])

  useEffect(() =>
  {
    document.title = "MFikriA  | About";
  });
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <p>{profile.bio}</p>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={profile.avatar_url} alt={profile.name} className="img-fluid" />
          </Col>
          <div>Github Following {profile.following}</div>
          <div>Github Followers {profile.followers}</div>
        </Row>
        {/* Tool And Stack */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
