import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import bitcoin from "../content/images/bitcoin.webp";
import bunny from "../content/images/bunny.webp";
import yellow from "../content/images/yellow.webp";
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

const SectionWrapper = styled.section`
  padding: 2rem 0;
  background: linear-gradient(rgb(255, 255, 255) 22%, rgb(215, 202, 236) 100%);
  position: relative;
  text-align: center;
  @media(min-width: 992px){
    padding: 4rem 0;
  }
  > h2 {
    font-size: 20px;
    text-align: left;

  }
  h5 {
    margin-top: 10px;
    color: rgb(40, 13, 95);
    font-weight: 600;
    @media (min-width: 992px){
      font-size: 16px;
    margin-bottom: 32px;
    }
  }
`;
const SectionHeading = styled.div`
  max-width: 400px;
  margin: auto;
  text-align: center;
  > h2 {
    font-size: 20px;
    color: rgb(40, 13, 95);
    font-weight: 600;
  }
  @media(min-width:992px){
    >h2{
      font-size: 32px;
      line-height: 1.1;
    }
  }
`;

const DescriptionWrapper = styled.div`
  margin-top: 10px;
  max-width: 500px;
  margin: auto;
  > p {
    color: rgb(122, 110, 170);
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    font-size: 14px;
    @media (min-width: 576px){
      font-size: 16px;
    }
    @media(min-width: 1400px){
    
      font-size: 18px;
    }
  }
`;

const CardDiv = styled.div`
  padding: 24px;
  background-color: #fff;
  border-radius: 22px;
  box-shadow: 2px 1px 14px -2px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 2px 1px 14px -2px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 2px 1px 14px -2px rgba(0, 0, 0, 0.68);
  text-align:left;
  > h2{
    font-size:28px;
    font-weight: 600;
    @media(min-width: 992px){
      margin-top: 15px;
      margin-bottom: 15px;
      font-size: 40px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 24px;
    }
  }

`
;
const ImgWrap = styled.div`
  text-align: end;
`;
export default function TrustedUsers() {
  return (
    <SectionWrapper>
      <SectionHeading>
        <span>
          <svg
            viewBox="0 0 48 48"
            height="48px"
            width="48px"
            color="text"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-eaf7e66-0 iRyKEY"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9024 0C10.8947 0 7.87179 3.60289 8.60749 7.50271L10.3484 16.7306C4.45101 19.3061 0 23.7533 0 29.3333V32.7273C0 37.3405 3.08306 41.2029 7.39317 43.8102C11.7369 46.4379 17.6132 48 24 48C30.3868 48 36.2631 46.4379 40.6068 43.8102C44.9169 41.2029 48 37.3405 48 32.7273V29.3333C48 23.7236 43.5028 19.2593 37.5552 16.6889L39.2882 7.50271C40.0239 3.6029 37.001 0 32.9933 0C29.4567 0 26.5896 2.83809 26.5896 6.33904V14.147C25.7386 14.0899 24.8746 14.0606 24 14.0606C23.0897 14.0606 22.1908 14.0923 21.3061 14.1541V6.33904C21.3061 2.83809 18.4391 0 14.9024 0ZM17.8776 28.3637C17.8776 30.372 16.7811 32 15.4286 32C14.0761 32 12.9796 30.372 12.9796 28.3637C12.9796 26.3554 14.0761 24.7273 15.4286 24.7273C16.7811 24.7273 17.8776 26.3554 17.8776 28.3637ZM34.7757 28.3637C34.7757 30.372 33.6792 32 32.3267 32C30.9742 32 29.8777 30.372 29.8777 28.3637C29.8777 26.3554 30.9742 24.7273 32.3267 24.7273C33.6792 24.7273 34.7757 26.3554 34.7757 28.3637Z"
              fill="url(#paint0_linear)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="24"
                y1="0"
                x2="24"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7645D9"></stop>
                <stop offset="1" stop-color="#5121B1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <h2>Used by millions. Trusted with billions.</h2>
      </SectionHeading>
      <DescriptionWrapper>
        <p>
          PancakeSwap has the most users of any decentralized platform, ever.
          And those users are now entrusting the platform with over $3.5 billion
          in funds.
        </p>
      </DescriptionWrapper>
      <h5>Will you join them?</h5>

      <Grid
        item
        container
        lg={12}
        spacing={4}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0px",
        }}
      >
        <Grid item lg={4} md={4} sm={12} xs={12} style={{ maxWidth: "280px" }}>
          <CardDiv>
            <ImgWrap>
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="rgb(118, 69, 217)"
                color="secondary"
                width="36px"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-eaf7e66-0 gcUazv"
              >
                <path d="M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.5523 0.447715 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.5523 18 24 17.5523 24 17V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z"></path>
              </svg>
            </ImgWrap>
            <h2>
              2.3 million{" "}
              <span style={{ color: "rgb(118, 69, 217)" }}>users</span>
            </h2>
            <p>In last 30 days</p>
          </CardDiv>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12} style={{ maxWidth: "280px" }}>
          <CardDiv>
            <ImgWrap>
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="rgb(31, 199, 212)"
                color="primary"
                width="36px"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-eaf7e66-0 etGTJB"
              >
                <path d="M21.2628 15.8306C21.5556 16.1235 21.5556 16.5983 21.2628 16.8912L18.654 19.5H20.3789C20.7931 19.5 21.1289 19.8358 21.1289 20.25C21.1289 20.6642 20.7931 21 20.3789 21L16.8433 21C16.4291 21 16.0933 20.6642 16.0933 20.25V16.7145C16.0933 16.3002 16.4291 15.9645 16.8433 15.9645C17.2575 15.9645 17.5933 16.3002 17.5933 16.7145V18.4393L20.2021 15.8306C20.495 15.5377 20.9699 15.5377 21.2628 15.8306Z"></path>
                <path d="M2.81293 7.78034C3.10583 8.07323 3.5807 8.07323 3.87359 7.78034L6.48235 5.17158L6.48235 6.89645C6.48235 7.31067 6.81814 7.64645 7.23235 7.64645C7.64656 7.64645 7.98235 7.31067 7.98235 6.89645L7.98235 3.36092C7.98235 3.16201 7.90333 2.97124 7.76268 2.83059C7.62203 2.68994 7.43126 2.61092 7.23235 2.61092L3.69682 2.61092C3.2826 2.61092 2.94682 2.9467 2.94682 3.36092C2.94682 3.77513 3.2826 4.11092 3.69682 4.11092H5.42169L2.81293 6.71968C2.52004 7.01257 2.52004 7.48744 2.81293 7.78034Z"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.46203 20.5622C8.66377 20.5827 8.86846 20.5932 9.07561 20.5932C12.3893 20.5932 15.0756 17.9069 15.0756 14.5932C18.3893 14.5932 21.0756 11.9069 21.0756 8.59315C21.0756 5.69362 19.0189 3.27448 16.2847 2.71504C15.9185 2.64011 15.5402 2.59853 15.153 2.59363C15.1272 2.5933 15.1014 2.59314 15.0755 2.59314C11.7618 2.59314 9.07549 5.27943 9.07549 8.59314C5.76179 8.59314 3.07549 11.2794 3.07549 14.5931C3.07549 17.5962 5.28172 20.0839 8.16175 20.524C8.26107 20.5392 8.36118 20.5519 8.46203 20.5622ZM5.07549 14.5931C5.07549 12.384 6.86636 10.5931 9.07549 10.5931C9.19246 10.5931 9.30806 10.5981 9.42214 10.6079C10.0255 12.3008 11.3678 13.6431 13.0607 14.2465C13.0705 14.3606 13.0755 14.4762 13.0755 14.5931C13.0755 16.8023 11.2846 18.5931 9.07549 18.5931C6.86636 18.5931 5.07549 16.8023 5.07549 14.5931ZM11.0755 8.59314C11.0755 6.384 12.8664 4.59314 15.0755 4.59314C17.2846 4.59314 19.0755 6.384 19.0755 8.59314C19.0755 10.8023 17.2846 12.5931 15.0755 12.5931C12.8664 12.5931 11.0755 10.8023 11.0755 8.59314Z"
                ></path>
              </svg>
            </ImgWrap>
            <h2>
              24 million{" "}
              <span style={{ color: " rgb(31, 199, 212)" }}>users</span>
            </h2>
            <p>made in the last 30 days</p>
          </CardDiv>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12} style={{ maxWidth: "280px" }}>
          <CardDiv>
            <ImgWrap>
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="rgb(237, 75, 158)"
                color="failure"
                width="36px"
                xmlns="http://www.w3.org/2000/svg"
                className="sc-eaf7e66-0 leAPlZ"
              >
                <path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
                ></path>
              </svg>
            </ImgWrap>
            <h2>
              $3.5 billion{" "}
              <span style={{ color: "rgb(237, 75, 158)" }}>users</span>
            </h2>
            <p>Total Value Locked</p>
          </CardDiv>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
