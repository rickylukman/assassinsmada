import React, {useState,useEffect} from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
// import { NavLink } from 'react-router-dom';
import { 
  Nav,
  NavbarContainer, 
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize',showButton);

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
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
            <NavLinks to='/services'>Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/products'>Products</NavLinks>
          </NavItem>
          <NavItemBtn>
            {button ? (
              <NavBtnLink to='/sign-up'>
                <Button primary>SIGN UP</Button>
              </NavBtnLink>
            ) : (
              <NavBtnLink to='/sign-up'>
                <Button fontBig primary>
                  SIGN UP
                </Button>
              </NavBtnLink>
            )}
          </NavItemBtn>
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