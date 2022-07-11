import React from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const WinPricesSection = styled.section`
  padding: 48px 0;
  background: linear-gradient(rgb(111, 182, 241) 0%, rgb(234, 242, 246) 100%);
  @media (min-width: 768px) {
    padding: 3rem 0;
  }
  @media (min-width: 992px) {
    padding: 4rem 0;
  }
`;

const ContainerDiv = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgb(231, 227, 235);
  box-sizing: border-box;
  backdrop-filter: blur(12px);
  border-radius: 72px;
  padding: 2.5rem 15px;
  margin: 0 15px;
  @media (min-width: 576px) {
    
    margin: 100px;
  }
`;
const HeadingDiv = styled.div`
  text-align: center;
  > h2 {
    color: rgb(40, 13, 95);
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 10px;
    text-align: center;
    font-size: 20px;
    @media (min-width: 768px) {
      font-size: 30px;
      margin-bottom: 24px;
    }
    @media (min-width: 992px) {
      font-size: 40px;
    }
    > span {
      display: inline-block;
      color: rgb(118, 69, 217);
    }
  }
`;

const DescriptionDiv = styled.div`
  max-width: 240px;
  margin: 0 auto;
  text-align: center;
  > p {
    color: rgb(122, 110, 170);
    font-weight: 400;
    line-height: 1.5;
    font-size: 14px;
    margin-bottom: 15px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
    @media (min-width: 992px) {
      margin-bottom: 40px;
    }
  }
`;

const FlexWrapDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 15px;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 992px) {
    gap: 0 30px;
  }
`;

const CardDiv1 = styled.div`
  max-width: 300px;
  border-radius: 24px;
  padding: 24px;
  font-weight: 600;
  line-height: 1.5;
  font-size: 14px;
  display: block;
  background: linear-gradient(
    rgb(255, 178, 55) 0%,
    rgb(255, 205, 81) 51.17%,
    rgb(255, 231, 106) 100%
  );
  > * small,
  p {
    color: rgb(40, 13, 95);
    font-weight: 400;
    line-height: 1.5;
    margin: 25px 0;  
    font-size: 14px;
  }
  > * h2 {
    color: rgb(40, 13, 95);
    font-size: larger;
    font-weight: 600;
    font-size: 40px;
    font-weight: 600;
    line-height: 1.1;

  }
  @media (min-width: 768px) {
    transform: rotate(-2.36deg);
  }
`;

const CardIconDiv = styled.div`
  text-align: end;
`;

const ContentWrapDiv = styled.div`
  margin-top: 20px;
`;

const CardDiv2 = styled.div`
  max-width: 300px;
  border-radius: 24px;
  padding: 24px;
  font-weight: 600;
  line-height: 1.5;
  font-size: 14px;
  display: block;
  background: linear-gradient(rgb(118, 69, 217) 0%, rgb(81, 33, 177) 100%);
  > * small,
  p {
    color: #fff;
    font-weight: 400;
    line-height: 1.5;
    /* margin-bottom: 40px; */
    font-size: 14px;
    margin: 25px 0;
  }
  > * h2 {
    color: yellow;
    font-weight: 600;
    line-height: 1.5;
    font-size: 40px;
    
  }
  > * svg {
    fill: #fff;
  }
  @media (max-width: 576px) {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    transform: rotate(2.36deg);
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 4px;
  > svg {
    fill: #fff;
  }
`;

export default function WinPrices() {
  return (
    <WinPricesSection>
      <Grid item lg={12} xs={2} style={{ margin: "auto" }}>
        <ContainerDiv>
          <HeadingDiv>
            <h2>
              <span>Win</span> millions in prizes
            </h2>
          </HeadingDiv>
          <DescriptionDiv>
            <p>Provably fair, on-chain games. Win big with PancakeSwap.</p>
          </DescriptionDiv>
          <FlexWrapDiv>
            <CardDiv1>
              <CardIconDiv>
                <svg
                  viewBox="0 0 24 24"
                  width="36px"
                  color="inverseContrast"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-eaf7e66-0 jLfrED"
                >
                  <path d="M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z"
                  ></path>
                </svg>
              </CardIconDiv>
              <ContentWrapDiv>
                <small>Prediction</small>
                <h2>$150 billion</h2>
                <small>in BNB + CAKE won so far</small>
                <p>Predict the price trend of BNB or CAKE to win</p>
                <StyledButton>
                  Play
                  <svg
                    viewBox="0 0 24 24"
                    color="invertedContrast"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-eaf7e66-0 bzSZKb"
                  >
                    <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                  </svg>
                </StyledButton>
              </ContentWrapDiv>
            </CardDiv1>
            <CardDiv2>
              <CardIconDiv>
                <svg
                  viewBox="0 0 24 24"
                  width="36px"
                  color="inverseContrast"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-eaf7e66-0 jLfrED"
                >
                  <path d="M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z"
                  ></path>
                </svg>
              </CardIconDiv>
              <ContentWrapDiv>
                <small>Prediction</small>
                <h2>$150 billion</h2>
                <small>in BNB + CAKE won so far</small>
                <p>Predict the price trend of BNB or CAKE to win</p>
                <StyledButton>
                  Play
                  <svg
                    viewBox="0 0 24 24"
                    color="invertedContrast"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-eaf7e66-0 bzSZKb"
                  >
                    <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                  </svg>
                </StyledButton>
              </ContentWrapDiv>
            </CardDiv2>
          </FlexWrapDiv>
        </ContainerDiv>
      </Grid>
    </WinPricesSection>
  );
}
