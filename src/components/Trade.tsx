import React from "react";
import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import bitcoin from "../content/images/bitcoin.webp";
import bunny from "../content/images/bunny.webp";
import yellow from "../content/images/yellow.webp";
import useMediaQuery from "@mui/material/useMediaQuery";



const Box = styled.section`
 @media(min-width:992px){
  padding: 40px 0;
  
 }
`
const Heading2 = styled.h2`
  font-size: 22px;
  @media(min-width: 768px){
    font-size: 30px;
  }
  @media(min-width: 992px){
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 24px;
  }
`;

const Description = styled.p`
color: rgb(122, 110, 170);
font-weight: 400;
line-height: 1.5;
margin-bottom: 24px;
font-size: 14px;
  @media(min-width: 576px){
    
    font-size: 16px;
  }
  @media(min-width: 1400px){
    
    font-size: 18px;
  }
`;

const ContentWrapper = styled.div`
  color: rgb(40, 13, 95);
  margin-top: 30px;
  padding: 0 15px;
  @media (min-width: 576px) {
    padding: 15px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
    // padding: 130px 110px;
  }
  @media (min-width: 1400px) {
    padding: 130px 110px;
  }
`;
const Wrapper = styled.div`
  position: relative;
  > img {
    @media (max-width: 576px) {
      height: 250px;
      width: 250px;
    }
  }

  &:before {
    content: "";
    position: absolute;
    background-image: url(${bunny});
    background-size: 370px 360px;
    height: 360px;
    width: 370px;
    background-repeat: no-repeat;
    display: inline-block;
    animation: bounce 16.5s ease-in-out infinite;
    z-index: 2;
    @media (max-width: 576px) {
      background-size: 280px 300px;
      height: 250px;
      width: 261px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    background-image: url(${yellow});
    background-size: 370px 360px;
    height: 360px;
    width: 370px;
    background-repeat: no-repeat;
    display: inline-block;
    z-index: -1;
    animation: bounce 16.8s ease-in-out infinite;
    @media (max-width: 576px) {
      background-size: 250px 300px;
      height: 280px;
      width: 260px;
    }
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate(-8px, -10px);
    }
    20%,
    40%,
    60%,
    80%,
    100% {
      transform: translate(8px, 10px);
    }
  }
`;

const Img = styled.img`
  height: 360px;
  width: 370px;
  animation: bounce 16s ease-in-out infinite;
`;

export default function Trade() {
  const matches = useMediaQuery("(max-width:576px)");
  const min_width992 = useMediaQuery("(min-width:992px)");

  return (
    <Box>
      <Grid
        item
        lg={10}
        container
        style={{ margin: "auto" }}
        display={matches ? "flex" : "flex"}
        flexDirection={matches ? "column-reverse" : "row"}
      >
        <Grid lg={6}  
        display={min_width992 ? "flex" : ""}
        alignItems={min_width992 ? "center" : ""}>
          <ContentWrapper>
            <Heading2>
              <span style={{ color: "rgb(118, 69, 217)" }}>
                Trade{" "}
              </span>
              anything. No registration, no hassle.
            </Heading2>
            <Description>
              Trade any token on BNB Smart Chain in seconds, just by connecting
              your wallet.
            </Description>
          </ContentWrapper>
        </Grid>
        <Grid lg={6}>
          <Wrapper>
            <Img src={bitcoin} alt="" />
          </Wrapper>
        </Grid>
      </Grid>
    </Box>
  );
}
