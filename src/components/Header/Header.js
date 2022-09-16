import React, { useState } from "react";
import { NavLink} from 'react-router-dom'
import styled from "styled-components";
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload
} from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #f2f2f2; // Navbar background color
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;



const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: black;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  height: ${props => (props.open ? "91vh" : 0)};
  position: ${props => (props.open ? "fixed" : "absolute")};
  width: 100vw;
  background: #F58181;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    background-color: transparent;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);

  const downloadCV = () =>{
    fetch('resume.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'resume.pdf';
          alink.click();
      })
    })
  }
  return (
    <>
      <Nav>
        
        <h1 className= {classes.LOGO}><span className={classes.logoBorder}>VM</span>Vipul Mashruwala</h1>
        <Menu>
          <Item>
             <NavLink activeClassName={classes.active} className={classes.link} to='/home'>Home</NavLink>
          </Item>
          <Item>
            <NavLink  activeClassName={classes.active} className={classes.link}  to="/portfolio">
              Portfolio 
            </NavLink>
          </Item>
          <Item>
            <button className={classes.CVbutton}
              onClick={() => downloadCV()}>
                <FontAwesomeIcon className={classes.Icon} icon={faDownload} /></button>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>

     
      <Overlay  open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <NavLink activeClassName={classes.activeResponsive} className={classes.linkResponsive} to='/home'
              onClick={()=> toggleNav(false)}>
              Home
            </NavLink>
          </Item>
          <Item>
            <NavLink  className={classes.linkResponsive} to="/portfolio"
            onClick={()=> toggleNav(false)}>
            Portfolio
            </NavLink>
          </Item>
          <Item>
            <button className={classes.CVbutton}
              onClick={() => downloadCV()}>
                <span className={classes.responsiveDownload}>
                  Download CV
                  <FontAwesomeIcon className={classes.cvIcon} icon={faDownload} />
                </span>
                
                </button>
          </Item>
          {/* <Item >
            <NavLink className={classes.linkResponsive} to="/contact"
            onClick={()=> toggleNav(false)}>
            Contact
            </NavLink>
          </Item> */}
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
