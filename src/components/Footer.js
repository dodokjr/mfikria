import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import
{
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaDiscord, FaSteam } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer()
{
  const [items, setItems] = useState([])
  const [url] = useState("https")
  useEffect(() =>
  {
    const fetchRepos = async () =>
    {
      const res = await fetch(
        'https://api-mfikria.vercel.app/link/'
      )
      const data = await res.json()
      setItems(data)
    }

    fetchRepos()
  }, [url])

  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} Fikria</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href={items.github}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={items.linkedin}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={items.instagram}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons" >
                <a
                  href={items.discord}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={items.youtube}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={items.steam}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSteam />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
