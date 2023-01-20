import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import DodokStore from "../../Assets/Projects/DodokStore.png";
import GithubApi from "./Github/GithubApi";



function Projects() {
  return (
    <>
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DodokStore}
              isBlog={false}
              title="Dodok Store"
              description="Store Project with Html Css Javascript"
              ghLink="https://github.com/dodokjr/dodok-store"
              demoLink="https://dodokvapestore.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
      <GithubApi/>
    </Container>
    </>
  );
}

export default Projects;
