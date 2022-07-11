import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pancakeswap from "../content/svg/pancakeswap.svg";
interface IMenuProps {
  isOpen: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="/">
        {" "}
        <img src={pancakeswap} />
      </Logo>
      <a href={"/#"}>Trade</a>
      <a href={"/#"}>Trade</a>
      <a href={"/#"}>Trade</a>
      <a href={"/#"}>Trade</a>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/aboutus">About</MenuLink>
        Join our waitlist
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ebebeb;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  max-width: 1440px;
  &:hover {
    color: #e0e0e0;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1440px;
  background: #adabab;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  display: flex;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div<IMenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #c09f9f;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
