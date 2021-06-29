//import { Collapse } from 'bootstrap';
import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };
  //2
  //3
  return (
    <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">Workout Log</NavbarBrand>
      <NavbarToggler onClick={toggle}></NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button onClick={props.clickLogout}>Logout</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Sitebar;
