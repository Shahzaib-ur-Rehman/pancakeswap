import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const ModalDialog = styled.div`
  max-width: 450px;
  margin: auto;
`;
const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 24px;
  color: rgb(122, 110, 170);
`;

const ModalHeaderWrap = styled.div`
  border-bottom: 1px solid rgb(231, 227, 235);
  display: flex;
  justify-content: space-around;
  gap: 0 5px;
  align-items: center;
`;

const ModalHeaderWrapper = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid rgb(231, 227, 235);
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ModalTitle = styled.h4`
  color: rgb(40, 13, 95);
  margin-left: -100px;
`;
const IconsWrap = styled.div`
  display: flex;
  gap: 0 15px;
  > * span svg {
    fill: rgb(122, 110, 170);
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  }
`;

const Paragraph = styled.p``;

const ModalBody = styled.div`
  padding: 24px;
  background-color: rgb(238, 238, 238);
  > p {
    text-align: center;
  }
`;
const BtnWraper = styled.div`
  border-top: 1px solid rgb(231, 227, 235);
  padding: 24px;
  > button {
    width: 100%;
  }
  > button svg {
    fill: #fff;
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
  background-color: rgb(233, 234, 235);
  border-color: rgb(233, 234, 235);
  box-shadow: none;
  color: rgb(189, 194, 196);
  cursor: not-allowed;
`;

const IconPWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
  padding: 20px 50px;
`;
const IconPWrapperDiv = styled.div`
  display: inline-flex;
`;

const ModelBodyHeading = styled.h4`
  color: rgb(118, 69, 217);
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  padding-bottom: 20px;
  margin-bottom: 0;
  font-size: 14px;
`;

const SelectBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 5px;
`;

const AccordianButton = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 16px;
  box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
  border: 1px solid rgb(215, 202, 236);
  border-radius: 16px;
  background: rgb(238, 234, 244);
  transition: border-radius 0.15s ease 0s;
  &:after {
    width: 0.75rem;
    height: 0.75rem;
    background-size: 0.75rem;
  }
`;
export default function AddLiquidity() {
  const handleAddLiquidity = () => {};
  return (
    <Box
      component={"section"}
      style={{ padding: "100px", backgroundColor: "#e8faff" }}
    >
      <Grid item lg={10} container style={{ margin: "auto" }}>
        <ModalDialog>
          <ModalContent>
            <ModalHeaderWrap>
              <span>
                <svg
                  viewBox="0 0 24 24"
                  width="32px"
                  color="text"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-eaf7e66-0 mvupn"
                >
                  <path d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"></path>
                </svg>
              </span>
              <ModalHeaderWrapper>
                <ModalTitle>Add Liquidity</ModalTitle>
              </ModalHeaderWrapper>
              <FlexDiv>
                <IconsWrap>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      color="textSubtle"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-eaf7e66-0 bXujD"
                    >
                      <path d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-eaf7e66-0 bXujD"
                    >
                      <path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path>
                    </svg>
                  </span>
                </IconsWrap>
              </FlexDiv>
            </ModalHeaderWrap>
            <IconPWrapper>
              <IconPWrapperDiv>
                <svg
                  viewBox="0 0 24 24"
                  color="textSubtle"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-eaf7e66-0 bXujD"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path>
                </svg>
              </IconPWrapperDiv>
              <Paragraph>
                Receive LP tokens and earn 0.17% trading fees
              </Paragraph>
            </IconPWrapper>

            <ModalBody>
              <ModelBodyHeading>CHOOSE A VALID PAIR</ModelBodyHeading>
              <SelectBtnWrapper>
                <AccordianButton>Select</AccordianButton>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    color="textSubtle"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-eaf7e66-0 bXujD"
                  >
                    <path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"></path>
                  </svg>
                </span>
                <AccordianButton>Select</AccordianButton>
              </SelectBtnWrapper>
            </ModalBody>
            <BtnWraper>
              <StyledButton onClick={handleAddLiquidity}>
                Connect Wallet
              </StyledButton>
            </BtnWraper>
          </ModalContent>
        </ModalDialog>
      </Grid>
    </Box>
  );
}
