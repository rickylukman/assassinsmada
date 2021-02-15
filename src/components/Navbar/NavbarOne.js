import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Button, FormControl, Form } from 'react-bootstrap'

const NavbarOne = () => {

  return (
    <>

      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Assassin</Navbar.Brand>
        <Nav className="ml-auto mr-4">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/when">When</Nav.Link>
          <Nav.Link href="/who">Who</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form> */}
      </Navbar>
    </>
  );
};

export default NavbarOne;