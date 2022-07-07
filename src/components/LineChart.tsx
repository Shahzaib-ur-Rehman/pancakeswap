import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { Line } from "react-chartjs-2";


export default function LineChart() {

  return (
    <Box
      component={"footer"}
      style={{ padding: "50px", backgroundColor: "rgb(250, 249, 250);" }}
    >
      <Grid item lg={10} md={10} xs={12} container style={{ margin: "auto" }}>
        <Grid lg={6} md={6} sm={10} xs={12}>
         
        </Grid>
        <Grid lg={6} md={6} sm={10} xs={12}>
          ipsum
        </Grid>
      </Grid>
    </Box>
  );
}
