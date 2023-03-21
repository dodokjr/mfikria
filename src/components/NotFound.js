import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const NotFound = () =>
{
     useEffect(() =>
     {
          document.title = 'Mfikria | 404'
     });
     return (
          <Container fluid className="p404">
               <div>
                    <h1>Oops! You seem to be lost.</h1>
                    <p>Here are some helpful links:</p>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
               </div>
          </Container>
     )
}


export default NotFound