import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt='logo' style={{width:"50%"}}/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/when' activeStyle>
            When
          </NavLink>
          <NavLink to='/who' activeStyle>
            Who
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;