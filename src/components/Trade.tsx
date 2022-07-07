import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import bitcoin from "../content/images/bitcoin.webp"
import bunny from "../content/images/bunny.webp"
import yellow from "../content/images/yellow.webp"
const Heading2=styled.h2`
font-size: 22px;
`

const Description=styled.p`
font-size: 18px;
color: red;
`
const Wrapper=styled.div`
position: relative;
&:before{
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
}
&:after{
    content: "";
    position: absolute;
    left: 0;
    background-image:  url(${yellow});
    background-size: 370px 360px;
    height: 360px;
    width: 370px;
    background-repeat: no-repeat;
    display: inline-block;
    z-index: -1;
    animation: bounce 16.8s ease-in-out infinite;

 }
 @keyframes bounce {
    0%,
    100% {
      transform: translate(0,0);
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
`

const Img=styled.img`
height: 360px;
width: 370px;
animation: bounce 16s ease-in-out infinite;
`

export default function Trade() {
  return (
    <Box
      component={"section"}
     
    >
      <Grid item lg={10} container style={{ margin: "auto" }}>
      <Grid  lg={6}>
      <Heading2>Trade anything. No registration, no hassle.</Heading2>
      <Description>Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.</Description>
       </Grid>
       <Grid  lg={6}>
       <Wrapper><Img src={bitcoin} alt=""/></Wrapper>
       </Grid>
      </Grid>
    </Box>
  );
}
