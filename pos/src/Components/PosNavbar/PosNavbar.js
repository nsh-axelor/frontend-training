import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const PosNavbar = ({brandName}) => {
    return(
        <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand>{brandName}</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default PosNavbar;