import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { LineChart } from "./LineChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import swapSvg from "../content/svg/swap.svg";
import settingSvg from "../content/svg/setting.svg";
import settingSvg1 from "../content/svg/setting1.svg";
import panda from "../content/images/panda.png";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: true,
      },
    },
    y: {
      display: false,
    },
  },
  fill: {
    colors: ["#1A73E8", "#B32824"],
  },
};

const Wrapper = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgb(231, 227, 235);
  border-radius: 16px;

  @media (min-width: 1400px) {
    min-height: 430px;
  }
`;
const RattingWrapper = styled.div`
  > h3 {
    font-size: 32px;
    line-height: 1.1;
    color: rgb(40, 13, 95);
    font-weight: 600;
    display: inline;
  }
  > h4 {
    color: rgb(122, 110, 170);
    font-weight: 600;
    font-size: 20px;
    display: inline;
  }
  > span {
    color: rgb(49, 208, 170);
    font-weight: 600;
    line-height: 1.5;
    margin-left: 4px;
    font-size: 20px;
  }
`;
const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 9px;
`;

const CardContentDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgb(231, 227, 235);
  border-radius: 16px;
  @media (min-width: 1400px) {
    min-height: 430px;
  }
`;
const ButtonWrapper = styled.div`
  background-color: rgb(239, 244, 245);
  border-radius: 16px;
  display: inline-flex;
  border: 1px solid rgb(233, 234, 235);
  width: auto;
  padding: 5px 5px;
`;
const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
`;

const SwapCardSvg = styled.div``;
const SettingWrapper = styled.div`
  position: relative;

  &:before {
    content: "Swap";
    position: absolute;
    left: -50px;
    top: -2px;
    font-size: 18px;
    font-weight: 600;
    color: rgb(40, 13, 95);
  }
`;

const Text = styled.span`
  display: block;
  text-align: center;
  color: rgb(122, 110, 170);
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px;
`;

const WrapperDiv = styled.div`
  border-bottom: 1px solid rgb(231, 227, 235);
`;
const InputWrapper = styled.div`
  color: rgb(40, 13, 95);
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  > label {
  }
  > input {
    color: rgb(40, 13, 95);
    border: 0px;
    border-radius: 5px;
    outline: 0px;
    padding: 10px 15px;
    background-color: rgb(238, 234, 244);
    box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
    text-align: right;
  }
`;

const Label = styled.label`
  display: flex;
  > span {
    margin-right: 10px;
  }
`;

const ArrowWraper = styled.div`
  display: flex;
  justify-content: center;
  > span {
    box-shadow: rgb(0 0 0 / 10%) 0px -2px 0px inset;
    border-radius: 50%;
    > svg {
      align-self: center;
      fill: rgb(31, 199, 212);
      flex-shrink: 0;
      cursor: pointer;
    }
  }
`;

const SmallContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  > span {
    font-size: 12px;
    font-weight: bold;
    color: rgb(118, 69, 217);
  }
`;

const ButtonWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;
export default function Swap() {
  const [ActiveButton, setActiveButton] = useState(1);
  const [dataAsets, setDataAsets] = useState({
    labels: [
      "03:00 AM",
      "06:00 AM",
      "09:00 AM",
      "11:00 AM",
      "01:00 PM",
      "04:00 PM",
      "07:00 PM",
      "10:00 PM",
      "07:08 PM",
    ],
    datasets: [
      {
        data: [3, 9, 1, 17, 4, 15, 14, 21, 15],
        label: "# of foo",
        backgroundColor: "#d9f4f2",
        borderColor: "#44f0e4",
        fill: true,
      },
    ],
  });
  const handleAddLiquidity = () => {};
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
    height: 30px;
    padding: 0px 24px;
    background-color: rgb(31, 199, 212);
    color: white;
  `;

  const handleClick = (id: String) => {
    if (id === "1") {
      setDataAsets({
        labels: [
          "03:00 AM",
          "06:00 AM",
          "09:00 AM",
          "11:00 AM",
          "01:00 PM",
          "04:00 PM",
          "07:00 PM",
          "10:00 PM",
          "07:08 PM",
        ],
        datasets: [
          {
            data: [3, 9, 1, 17, 4, 15, 14, 21, 15],
            label: "# of foo",
            backgroundColor: "#d9f4f2",
            borderColor: "#44f0e4",
            fill: true,
          },
        ],
      });
    } else if (id === "2") {
      setDataAsets({
        labels: [
          "Jul 05",
          "Jul 06",
          "Jul 07",
          "Jul 08",
          "Jul 09",
          "Jul 10",
          "Jul 11",
          "Jul 12",
          "Jul 13",
        ],
        datasets: [
          {
            data: [1, 10, 15, 20, 13, 25, 35, 40, 50],
            label: "# of foo",
            backgroundColor: "#d9f4f2",
            borderColor: "#44f0e4",
            fill: true,
          },
        ],
      });
    } else if (id === "3") {
      setDataAsets({
        labels: [
          "Jul 05",
          "Jul 06",
          "Jul 07",
          "Jul 08",
          "Jul 09",
          "Jul 10",
          "Jul 11",
          "Jul 12",
          "Jul 13",
        ],
        datasets: [
          {
            data: [5, 17, 15, 20, 13, 25, 35, 40, 50],
            label: "# of foo",
            backgroundColor: "#d9f4f2",
            borderColor: "#44f0e4",
            fill: true,
          },
        ],
      });
    } else if (id === "4") {
      setDataAsets({
        labels: [
          "Jul 05",
          "Aug 06",
          "Sep 07",
          "Act 08",
          "Nov 09",
          "Dec 10",
          "Jun 11",
          "Feb 12",
          "Mar 13",
        ],
        datasets: [
          {
            data: [5, 11, 8, 20, 13, 25, 20, 40, 50],
            label: "# of foo",
            backgroundColor: "#d9f4f2",
            borderColor: "#44f0e4",
            fill: true,
          },
        ],
      });
    }
  };
  return (
    <Box
      component={"section"}
      style={{ padding: "50px", backgroundColor: "#e8faff" }}
    >
      <Grid item lg={10} container style={{ margin: "auto" }} spacing={3}>
        <Grid item lg={8} md={10} sm={12} xs={12} style={{ margin: "auto" }}>
          <Wrapper>
            <ContentDiv>
              <RattingWrapper>
                <h3>75.58</h3> <h4>BNB/CAKE</h4> <span>+0.867 (1.16%)</span>
              </RattingWrapper>
              <ButtonWrapper>
                <StyledButton onClick={handleClick.bind(null, "1")}>
                  24H
                </StyledButton>
                <StyledButton onClick={handleClick.bind(null, "2")}>
                  1W
                </StyledButton>
                <StyledButton onClick={handleClick.bind(null, "3")}>
                  1M
                </StyledButton>
                <StyledButton onClick={handleClick.bind(null, "4")}>
                  1Y
                </StyledButton>
              </ButtonWrapper>
            </ContentDiv>
            <Line options={options} data={dataAsets} />
          </Wrapper>
        </Grid>
        <Grid item lg={4} md={10} sm={12} xs={12} style={{ margin: "auto" }}>
          <CardContentDiv>
            <WrapperDiv>
              <HeadWrapper>
                <SwapCardSvg>
                  <img src={swapSvg} alt="imag" />
                </SwapCardSvg>
                <SettingWrapper>
                  <img src={settingSvg} alt="imag" />
                  <img src={settingSvg1} alt="imag" />
                  <img src={settingSvg1} alt="imag" />
                </SettingWrapper>
              </HeadWrapper>
              <Text>Trade tokens in an instant</Text>
            </WrapperDiv>
            <InputWrapper>
              <Label>
                <span>
                  {" "}
                  <svg
                    viewBox="0 0 96 96"
                    width="24px"
                    color="text"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-eaf7e66-0 mvupn"
                  >
                    <circle cx="48" cy="48" r="48" fill="#F0B90B"></circle>
                    <path
                      d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <span>BNB</span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-eaf7e66-0 mvupn"
                  >
                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                  </svg>
                </span>
              </Label>
              <input type="text" pattern="[0-9]" placeholder="0.0" />
            </InputWrapper>
            <ArrowWraper>
              <span>
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  className="sc-eaf7e66-0 etGTJB icon-down"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
                </svg>
              </span>
            </ArrowWraper>

            <InputWrapper>
              <Label>
                <span>
                  <img src={panda} alt="imag" width={24} height={24} />
                </span>
                <span>CAKE</span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    color="text"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-eaf7e66-0 mvupn"
                  >
                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                  </svg>
                </span>
              </Label>
              <input type="text" pattern="[0-9]" placeholder="0.0" />
            </InputWrapper>

            <SmallContentWrapper>
              <span>Slippage Tolerance</span>
              <span>0.5%</span>
            </SmallContentWrapper>
            <ButtonWrapperDiv>
              <StyledButton>Connect Wallet</StyledButton>
            </ButtonWrapperDiv>
          </CardContentDiv>
        </Grid>
      </Grid>
    </Box>
  );
}
