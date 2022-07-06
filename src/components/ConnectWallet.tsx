import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  > a {
    color: rgb(31, 199, 212);
    font-weight: 600;
    line-height: 1.5;
    font-size: 16px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Heading = styled.h2`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
`;
const Discription = styled.span`
  color: white;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  font-size: 16px;
  padding: 30px 0px;
`;

const StyledButton = styled.button`
  -webkit-box-align: center;
  align-items: center;
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 48px;
  padding: 0px 24px;
  background-color: rgb(31, 199, 212);
  color: white;
  margin-top: 24px;
  &:hover {
    opacity: 0.65;
  }
`;

export default function ConnectWallet() {
  return (
    <Box
      component={"footer"}
      style={{
        padding: "50px",
        background:
          "linear-gradient(rgb(118, 69, 217) 0%, rgb(81, 33, 177) 100%)",
      }}
    >
      <Grid lg={12} container>
        <Grid lg={3} md={6} sm={12} xs={12}>
          Section 1
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12}>
          <ContentWrapper>
            <Heading>Start in seconds.</Heading>
            <Discription>
              Connect your crypto wallet to start using the app in seconds.
              <br /> No registration needed.
            </Discription>
            <Link to="/">Learn how to start</Link>
            <StyledButton>Connect Wallet</StyledButton>
          </ContentWrapper>
        </Grid>
        <Grid lg={3} md={6} sm={12} xs={12}>
          Section 1
        </Grid>
      </Grid>
    </Box>
  );
}
