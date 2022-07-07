import React from "react";
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
import styled from "styled-components";

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

const data = {
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
      backgroundColor: "gray",
      borderColor: "green",
      fill: true,
    },
  ],
};

const Wrapper = styled.div``;

export function LineChart() {
  return (
    <Wrapper>
      <Line options={options} data={data} />
    </Wrapper>
  );
}
