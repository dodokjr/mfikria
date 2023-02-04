import React, { useEffect } from "react"
import { Container } from "react-bootstrap"

const NotFound = () =>
{
     useEffect(() =>
     {
          document.title = 'Mfikria | 404'
     });
     return (
          <Container fluid className="p404">
               <div>NotFound Pages 404</div>
          </Container>
     )
}


export default NotFound