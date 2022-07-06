import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
export const data = {
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
      label: "First dataset",
      data: [13, 9, 31, 21, 4, 15, 14, 41, 54, 45],
      fill: true,
      backgroundColor: "#f2f9fc",
      borderColor: "#6de3ad",
    },
  ],
};

export const legend = {
  display: false,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 10,
  },
};

export default function LineChart() {
  const options = {
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
  };
  return (
    <Box
      component={"footer"}
      style={{ padding: "50px", backgroundColor: "rgb(250, 249, 250);" }}
    >
      <Grid item lg={10} md={10} xs={12} container style={{ margin: "auto" }}>
        <Grid lg={6} md={6} sm={10} xs={12}>
          <Line data={data} legend={legend} options={options} />
        </Grid>
        <Grid lg={6} md={6} sm={10} xs={12}>
          ipsum
        </Grid>
      </Grid>
    </Box>
  );
}
