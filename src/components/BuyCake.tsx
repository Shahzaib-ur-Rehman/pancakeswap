import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import twitter from "../content/svg/twitter.svg";
import reddit from "../content/svg/reddit.svg";
import ecelator from "../content/svg/ecelator.svg";
import github from "../content/svg/github.svg";
import instagram from "../content/svg/instagram.svg";
import medium from "../content/svg/medium.svg";
import discord from "../content/svg/discord.svg";
import pancakeswap from "../content/svg/pancakeswap.svg";
const FooterList = styled.ul`
  list-style: none;
  color: #fff;
  > * {
    &:first-child {
      color: rgb(154, 106, 255);
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

const FooterListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;
`;
const LinkTagWrapper = styled.span`
  > * a {
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    line-height: 1.5;
    font-size: 16px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  > img {
    padding: 0px 10px 0px 0px;
  }
`;

const FooterListArray1 = [
  {
    Link: "/",
    Name: "Contact",
  },
  {
    Link: "/",
    Name: "Brand",
  },
  {
    Link: "/",
    Name: "Blog",
  },

  {
    Link: "/",
    Name: "Community",
  },

  {
    Link: "/",
    Name: "Lightpaper",
  },

  {
    Link: "/",
    Name: "Online Store",
  },
];
const FooterListArray2 = [
  {
    Link: "/",
    Name: "Customer Support",
  },
  {
    Link: "/",
    Name: "Troubleshooting",
  },
  {
    Link: "/",
    Name: "Guides",
  },
];
const FooterListArray3 = [
  {
    Link: "/",
    Name: "Github",
  },
  {
    Link: "/",
    Name: "Documentation",
  },
  {
    Link: "/",
    Name: "Bug Bounty",
  },

  {
    Link: "/",
    Name: "Audits",
  },

  {
    Link: "/",
    Name: "Careers",
  },
];

export default function BuyCake() {
  return (
    <Box
      component={"footer"}
      style={{ padding: "50px", backgroundColor: "rgb(250, 249, 250);" }}
    >
      <Grid item lg={10} md={10} xs={12} container style={{ margin: "auto" }}>
        <Grid lg={6} md={6} sm={10} xs={12}>
          Lorem
        </Grid>
        <Grid lg={6} md={6} sm={10} xs={12}>
          ipsum
        </Grid>
      </Grid>
    </Box>
  );
}
