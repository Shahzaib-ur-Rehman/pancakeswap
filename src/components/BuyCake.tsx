import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import mail from "../content/images/mail.webp";
import graph from "../content/images/bun.webp";
import circle from "../content/images/circle.webp";
const Heading2 = styled.h2`
  font-size: 22px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const ContentWrapper = styled.div`
  color: rgb(40, 13, 95);
  @media (min-width: 576px) {
    padding: 10px 0px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
    padding: 130px 80px;
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
  > p {
    margin-bottom: 4px;
    color: rgb(40, 13, 95);
    font-weight: 600;
    line-height: 1.1;
    font-size: 16px;
  }
  > h6 {
    color: rgb(122, 110, 170);
    font-weight: 400;
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
export default function BuyCake() {
  return (
    <Box component={"section"}>
      <Grid item lg={10} sm={12} xs={12} container style={{ margin: "auto" }}>
        <Grid lg={6}>
          <ContentWrapper>
            <Heading2>
              <span style={{ color: "rgb(118, 69, 217)", fontSize: "28px" }}>
                CAKE{" "}
              </span>
              makes our world go round.
            </Heading2>
            <Description>
              CAKE token is at the heart of the PancakeSwap ecosystem. Buy it,
              win it, farm it, spend it, stake it... heck, you can even vote
              with it!
            </Description>
          </ContentWrapper>
        </Grid>
        <Grid lg={6}>
          <Wrapper>
            <Img src={mail} alt="" />
          </Wrapper>
        </Grid>
      </Grid>
      <Grid
        item
        lg={8}
        sm={12}
        xs={12}
        container
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        <Grid lg={4}>
          <SmallCardWrapper>
            <SmallCard style={{ paddingLeft: "0px", borderLeft: "0px" }}>
              <h6>Circulating Supply</h6>
              <p>149,992,800</p>
            </SmallCard>
          </SmallCardWrapper>
        </Grid>
        <Grid lg={4}>
          <SmallCardWrapper>
            <SmallCard>
              <h6>Total supply</h6>
              <p>316,503,813</p>
            </SmallCard>
          </SmallCardWrapper>
        </Grid>
        <Grid lg={4}>
          <SmallCardWrapper>
            <SmallCard>
              <h6>Max Supply</h6>
              <p>750,000,000</p>
            </SmallCard>
          </SmallCardWrapper>
        </Grid>
        <Grid lg={4}>
          <SmallCardWrapper>
            <SmallCard style={{ paddingLeft: "0px", borderLeft: "0px" }}>
              <h6>Market cap</h6>
              <p>$460 million</p>
            </SmallCard>
          </SmallCardWrapper>
        </Grid>
        <Grid lg={4}>
          <SmallCardWrapper>
            <SmallCard>
              <h6>Burned to date</h6>
              <p>508,904,887</p>
            </SmallCard>
          </SmallCardWrapper>
        </Grid>
        <Grid lg={4}>
          <SmallCardWrapper>
            <SmallCard>
              <h6>Current emissions</h6>
              <p>13.75/block</p>
            </SmallCard>
          </SmallCardWrapper>
        </Grid>
      </Grid>
    </Box>
  );
}
