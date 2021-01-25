import React, {useState} from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
  Nav,
  NavbarContainer, 
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={handleClick}>
            <NavIcon/>
            ASSASSIN
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
          </MobileIcon>
        </NavbarContainer>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to='/'>Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/when'>When</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/who'>Who</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/about'>About</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </IconContext.Provider>
      {/* // <Nav>
      //   <NavLink to='/'>
      //     <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt='logo' style={{width:"50%"}}/>
      //   </NavLink>
      //   <Bars />
      //   <NavMenu>
      //     <NavLink to='/about' activeStyle>
      //       About
      //     </NavLink>
      //     <NavLink to='/when' activeStyle>
      //       When
      //     </NavLink>
      //     <NavLink to='/who' activeStyle>
      //       Who
      //     </NavLink>
      //   </NavMenu>
      // </Nav> */}
    </>
  );
};

export default Navbar;