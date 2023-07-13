import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import DodokStore from "../../Assets/Projects/DodokStore.png";
import Gabut from "../../Assets/Projects/gabut.png"
import GithubApi from "./GithubApi/GithubApi";


function Projects()
{


  useEffect(() =>
  {
    document.title = "MFikriA  | Projects";
  });

  return (
    <>
      <Container fluid className="project-section">
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
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Gabut}
                isBlog={false}
                title="Token And Password Random"
                description="Project with Html Css Javascript"
                ghLink="https://github.com/dodokjr/gabut-1"
                demoLink="https://gabut-1.vercel.app/"
              />
            </Col>
          </Row>
          <GithubApi />
        </Container>
      </Container>

    </>
  );
}

export default Projects;
