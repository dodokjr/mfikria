import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Logo from '../Assets/logo.png'
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { BsListNested } from "react-icons/bs";
import
{
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineHistory,
} from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa"

import { CgFileDocument } from "react-icons/cg";

function NavBar()
{
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler()
  {
    if (window.scrollY >= 20)
    {
      updateNavbar(true);
    } else
    {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={Logo} alt="logo" width={55} height={40} />
          <h1>FikriA</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() =>
          {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/price"
                onClick={() => updateExpanded(false)}
              >
                <FaRegMoneyBillAlt style={{ marginBottom: "2px" }} /> Price
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/anime"
                onClick={() => updateExpanded(false)}
              >
                <BsListNested style={{ marginBottom: "2px" }} /> Anime
              </Nav.Link>
            </Nav.Item>


            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/dodokjr"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to='/updatelist' onClick={() => updateExpanded(false)} title="History And Update Website"><AiOutlineHistory /></Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
