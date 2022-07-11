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
      <NavLeft>
      <Logo>
        {" "}
        <img src={pancakeswap} height="56" width="160" />
      </Logo>
      <a href={"/#"}>Trade</a>
      <a href={"/#"}>Trade</a>
      <a href={"/#"}>Trade</a>
      <a href={"/#"}>Trade</a>
      </NavLeft>
      

      <NavRight>
      <LogoRight href="/">
        {" "}
        <img src={pancakeswap} />
      </LogoRight>

      <RightLink1 href={"/#"}>
        <svg viewBox="0 0 96 96" width="24px" color="text" xmlns="http://www.w3.org/2000/svg"><circle cx="48" cy="48" r="48" fill="url(#paint0_linear_10493)"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z" fill="#633001"></path><path d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z" fill="#D1884F"></path><path d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z" fill="#FEDC90"></path><path d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z" fill="#633001"></path><defs><linearGradient id="paint0_linear_10493" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse"><stop stop-color="#53DEE9"></stop><stop offset="1" stop-color="#1FC7D4"></stop></linearGradient></defs></svg>
        $3.058
      </RightLink1>
       
       <a href={"/#"}>
      <svg viewBox="0 0 24 24" color="textSubtle" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"></path></svg>
      </a>

      <a href={"/#"}>
      <svg viewBox="0 0 24 24" height="24" width="24" color="textSubtle" xmlns="http://www.w3.org/2000/svg"><path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"></path></svg>
      </a>
       
       <StyledButton>
        Connect Wallet
       </StyledButton>


      </NavRight>  

       
     
    </Nav>
  );
};

export default Navbar;


const NavLeft = styled.div`
display: none;
@media(min-width: 992px){
display: flex;
justify-content: flex-start;
align-items: center;
gap: 0 26px;
> a {
  text-decoration: none;
  color: rgb(122, 110, 170);
    font-size: 16px;
    font-weight: 400;
  padding: 14px 10px;

    &:hover{
      background: rgb(239, 244, 245);
      border-radius: 16px;
    }
}
}
`
const NavRight = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 0 4px;
width : 100%;

@media(min-width: 992px){
  gap: 0 12px;
justify-content: end;
&

}
> a{
  text-decoration: none;
  padding: 10px 0;
  @media(min-width: 992px){
  padding: 14px 8px;
}
 > svg{
  fill: rgb(122, 110, 170);
  height: 18px;
  width: 18px;
@media(min-width: 576px){
  height: initial;
  width: initial;
}
 }
}
`
const RightLink1 = styled.a`
   display: flex;
   align-items: center;
   gap: 0 4px;
   color: rgb(122, 110, 170);
    font-weight: 600;
    line-height: 1.5;
`

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  margin: auto;
  max-width: 1440px;
  background: #fff;
@media(min-width: 576px){
  padding: 0 15px;

}
`;

const Logo = styled.div`
  // padding: 14px 8px;
  color: #7b7fda;
  text-decoration: none;
  // font-weight: 800;
  // font-size: 1.7rem;
  display: contents;
  span {
    font-weight: 300;
    // font-size: 1.3rem;
  }
`;

const LogoRight = styled.a`
  padding: 14px 8px;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  display: flex;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  @media(min-width: 992px){
  display: none;
  
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
const StyledButton = styled.button`
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 10px;
  font-weight: 400;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  padding: 6px;
  background-color: rgb(31, 199, 212);
  color: #fff;
  border-color: rgb(233, 234, 235);
  @media (min-width: 576px) {
    font-size: 16px;
    padding: 10px;
  font-weight: 600;

  }

`;