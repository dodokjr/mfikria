import React, { useEffect } from "react"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

const NotFound = () =>
{
     useEffect(() =>
     {
          document.title = 'Mfikria | 404'
     });
     return (
          <Container fluid className="p404 text-center">
               <div>
                    NotFound 404
                    <Button as={Link} to='/'>Home</Button>
               </div>
          </Container>
     )
}


export default NotFound