import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import mail from "../content/images/mail.webp";
import graph from "../content/images/graph.webp";
import circle from "../content/images/circle.webp";
import useMediaQuery from "@mui/material/useMediaQuery";
const Heading2 = styled.h2`
  font-size: 22px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const ContentWrapper = styled.div`
  color: rgb(40, 13, 95);
  text-align: center;
  @media (min-width: 576px) {
    padding: 10px 0px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
    padding: 130px 110px;
  }
  @media (min-width: 1400px) {
    padding: 130px 110px;
  }
`;
const Wrapper = styled.div`
  position: relative;
  > img {
    @media (max-width: 576px) {
      height: 300px;
      width: 300px;
    }
  }
  &:before {
    content: "";
    position: absolute;
    background-image: url(${graph});
    background-size: 370px 360px;
    height: 360px;
    width: 370px;
    background-repeat: no-repeat;
    display: inline-block;
    animation: bounce 16.5s ease-in-out infinite;
    z-index: 2;
    @media (max-width: 576px) {
      height: 250px;
      width: 261px;
    }
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    background-image: url(${circle});
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

const HeadingWrapSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    padding: 10px 20px;
  }
  > h3 {
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;
const SmallCardWrapper = styled.div`
  padding: 0px 0px 30px 0px;
`;
const SmallCard = styled.div`
  padding-left: 16px;
  border-left: 1px solid rgb(215, 202, 236);
  > * p {
    margin-bottom: 4px;
    color: rgb(40, 13, 95);
    font-weight: 600;
    line-height: 1.1;
    font-size: 16px;
  }
  > * h6 {
    color: rgb(118, 69, 217);
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 10px;
    font-size: 12px;
  }
`;
const CardSpanElem = styled.span`
  color: rgb(122, 110, 170);
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;
  display: block;
`;
export default function EarnPassiveEncome() {
  const matches = useMediaQuery("(max-width:576px)");
  return (
    <Box
      component={"section"}
      style={{
        background:
          "linear-gradient(111.68deg, rgb(242, 236, 242) 0%, rgb(232, 242, 246) 100%)",
      }}
    >
      <Grid item lg={10} container style={{ margin: "auto" }}>
        <Grid lg={6}>
          <Wrapper>
            <Img src={mail} alt="" />
          </Wrapper>
        </Grid>
        <Grid lg={6}>
          <ContentWrapper>
            <Heading2>
              <span style={{ color: "rgb(118, 69, 217)", fontSize: "28px" }}>
                Earn{" "}
              </span>
              passive income with crypto.
            </Heading2>
            <Description>
              PancakeSwap makes it easy to make your crypto work for you.
            </Description>
          </ContentWrapper>
        </Grid>

        <HeadingWrapSlider>
          <h3>
            Top <span>Syrup Pools</span>
          </h3>
          <span className="topbottom">
            <svg
              viewBox="0 0 24 25"
              height="24px"
              width="24px"
              color="textSubtle"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-eaf7e66-0 bXujD"
            >
              <path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"></path>
            </svg>
          </span>
        </HeadingWrapSlider>
      </Grid>
      <Grid
        item
        lg={10}
        container
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        <Grid lg={2} md={4} sm={6} xs={12}>
          <SmallCardWrapper>
            <SmallCard
              style={{
                paddingLeft: `${matches ? "" : "0px"}`,
                borderLeft: `${matches ? "" : "0px"}`,
              }}
            >
              <h6>Stake Cake</h6>
              <p>UP TO 86.529%</p>
              <CardSpanElem>APY</CardSpanElem>
            </SmallCard>
          </SmallCardWrapper>
        </Grid>
        <Grid lg={2} md={4} sm={6} xs={12}>
          <SmallCardWrapper>
            <SmallCard>
              <h6>Stake Cake</h6>
              <p>UP TO 86.529%</p>
              <CardSpanElem>APY</CardSpanElem>
            </SmallCard>
          </SmallCardWrapper>
        </Grid>
        <Grid lg={2} md={4} sm={6} xs={12}>
          <SmallCardWrapper>
            <SmallCard>
              <h6>Stake Cake</h6>
              <p>UP TO 86.529%</p>
              <CardSpanElem>APY</CardSpanElem>
            </SmallCard>
          </SmallCardWrapper>
        </Grid>
        <Grid lg={2} md={4} sm={6} xs={12}>
          <SmallCardWrapper>
            <SmallCard>
              <h6>Stake Cake</h6>
              <p>UP TO 86.529%</p>
              <CardSpanElem>APY</CardSpanElem>
            </SmallCard>
          </SmallCardWrapper>
        </Grid>
        <Grid lg={2} md={4} sm={6} xs={12}>
          <SmallCardWrapper>
            <SmallCard>
              <h6>Stake Cake</h6>
              <p>UP TO 86.529%</p>
              <CardSpanElem>APY</CardSpanElem>
            </SmallCard>
          </SmallCardWrapper>
        </Grid>
      </Grid>
    </Box>
  );
}
