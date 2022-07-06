import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import CakeImage from "../content/images/cake.png";
const BodyWrapper = styled.div``;

const BannerWrapper = styled.div`
  padding-top: 40px;
  background: linear-gradient(
    139.73deg,
    rgb(230, 253, 255) 0%,
    rgb(243, 239, 255) 100%
  );
  position: relative;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  z-index: 1;
  @media (min-width: 576px) {
    padding-top: 50px;
  }
  @media (min-width: 992px) {
    padding-top: 60px;
  }
  @media (min-width: 1400px) {
    padding-top: 80px;
  }
`;

const SliderSection = styled.section`
  padding: 0px 50px;
`;

const Slider = styled.div`
  background: -webkit-linear-gradient(
    top,
    rgb(118, 69, 217) 0%,
    rgb(69, 42, 122) 100%
  );
  border-radius: 32px;
  padding: 30px 20px;

  @media (min-width: 576px) {
    padding: 30px 30px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 1400px) {
    margin: 0 40px;
  }
`;

const SliderHeading4 = styled.h4`
  background-color: -webkit-linear-gradient(
      top,
      rgb(255, 216, 0),
      rgb(235, 140, 0)
    )
    text;
  display: inline-block;
`;

const SliderHeading2 = styled.h2`
  font-weight: 600;
  color: rgb(255, 255, 255);
`;

const StyledButton = styled.button`
  position: relative;
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
`;

const StyledButtonOutline = styled(StyledButton)`
  background-color: transparent;
  border: 2px solid rgb(31, 199, 212);
  color: rgb(31, 199, 212);
`;
const MoonSection = styled.section`
  @media (min-width: 1400px) {
    padding-top: 50px;
  }
`;

const MoonSectionHeading = styled.h1`
  color: rgb(118, 69, 217);
  font-weight: 600;

  @media (min-width: 1400px) {
    font-size: 70px;
  }
  @media (min-width: 992px) {
    font-size: 36px;
  }
`;

const MoonSectionDiscription = styled.p`
  color: rgb(40, 13, 95);
  font-weight: 600;
  margin-bottom: 15px;
  @media (min-width: 992px) {
    font-size: 20px;
  }
`;
const MoonBtnWrapper = styled.div``;

const CurvedImage = styled.div`
  z-index: -1;
  overflow: hidden !important;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 60%;
  bottom: 0px;
  left: 0px;
`;
const CakeImageComponent = styled.img`
  @media (min-width: 992px) {
    height: "488px";
    width: "350px";
  }
`;
export default function Banner() {
  return (
    <BodyWrapper>
      <BannerWrapper>
        <SliderSection className="sliderSection">
          <Box className="container">
            <Slider className="slider">
              <SliderHeading4>Perpetual Futures</SliderHeading4>
              <SliderHeading2>UP TO 100X LEVERAGE</SliderHeading2>
              <StyledButton>Play Now</StyledButton>
            </Slider>
          </Box>
        </SliderSection>
        <MoonSection>
          <Box>
            <Grid
              lg={10}
              container
              style={{
                margin: "auto",
              }}
            >
              <Grid
                lg={6}
                md={6}
                sm={12}
                xs={12}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <MoonSectionHeading>
                  The moon is made of pancakes
                </MoonSectionHeading>
                <MoonSectionDiscription>
                  Trade, earn, and win crypto on the most popular decentralized
                  platform in the galaxy.
                </MoonSectionDiscription>
                <MoonBtnWrapper className="moonBtnWrapper">
                  <StyledButton>Connect Wallet</StyledButton>
                  <StyledButtonOutline className="btnc btnc-outline">
                    Trade Now
                  </StyledButtonOutline>
                </MoonBtnWrapper>
              </Grid>
              <div className="col-md-6 text-lg-center">
                <CakeImageComponent
                  src={CakeImage}
                  height="561"
                  width="445"
                  alt="cake"
                />
              </div>
            </Grid>
          </Box>
        </MoonSection>
        <CurvedImage>
          <svg
            viewBox="0 0 1660 339"
            width="100%"
            color="text"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-eaf7e66-0 mvupn"
          >
            <path
              d="M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z"
              fill="url(#paint0_linear_light)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_light"
                x1="830"
                y1="84"
                x2="830"
                y2="339"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.48"></stop>
                <stop
                  offset="0.566389"
                  stop-color="white"
                  stop-opacity="0.35"
                ></stop>
                <stop offset="1" stop-color="white"></stop>
              </linearGradient>
            </defs>
          </svg>
        </CurvedImage>
      </BannerWrapper>
    </BodyWrapper>
  );
}
