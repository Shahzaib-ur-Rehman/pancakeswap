import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { LineChart } from "./LineChart";
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

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
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

export default function Swap() {
  const handleAddLiquidity = () => {};
  return (
    <Box
      component={"section"}
      style={{ padding: "50px", backgroundColor: "#e8faff" }}
    >
      <Grid item lg={10} container style={{ margin: "auto" }} spacing={3}>
        <Grid item lg={8} md={10} sm={12} xs={12} style={{ margin: "auto" }}>
          <Wrapper>
            <ContentDiv>
              <div>Conetn</div>
              <div>Tent</div>
            </ContentDiv>
            <LineChart />
          </Wrapper>
        </Grid>
        <Grid item lg={4} md={10} sm={12} xs={12} style={{ margin: "auto" }}>
          <CardContentDiv>Lorem</CardContentDiv>
        </Grid>
      </Grid>
    </Box>
  );
}
