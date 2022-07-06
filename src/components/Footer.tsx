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

export default function Footer() {
  return (
    <Box
      component={"footer"}
      style={{ padding: "50px", backgroundColor: "rgb(39, 38, 44)" }}
    >
      <Grid item lg={10} container style={{ margin: "auto" }}>
        <Grid lg={3} md={6} sm={12} xs={12}>
          <FooterList>
            <FooterListItem>About</FooterListItem>
            <Box component={"div"}>
              <LinkTagWrapper>
                {FooterListArray1.map((element) => {
                  return (
                    <FooterListItem>
                      <Link to={element.Link}>{element.Name}</Link>
                    </FooterListItem>
                  );
                })}
              </LinkTagWrapper>
            </Box>
          </FooterList>
        </Grid>
        <Grid lg={3} md={6} sm={12} xs={12}>
          <FooterList>
            <FooterListItem>Help</FooterListItem>
            <Box component={"div"}>
              <LinkTagWrapper>
                {FooterListArray2.map((element) => {
                  return (
                    <FooterListItem>
                      <Link to={element.Link}>{element.Name}</Link>
                    </FooterListItem>
                  );
                })}
              </LinkTagWrapper>
            </Box>
          </FooterList>
        </Grid>
        <Grid lg={3} md={6} sm={12} xs={12}>
          <FooterList>
            <FooterListItem>Developers</FooterListItem>
            <Box component={"div"}>
              <LinkTagWrapper>
                {FooterListArray3.map((element) => {
                  return (
                    <FooterListItem>
                      <Link to={element.Link}>{element.Name}</Link>
                    </FooterListItem>
                  );
                })}
              </LinkTagWrapper>
            </Box>
          </FooterList>
        </Grid>
        <Grid lg={3} md={6} sm={12} xs={12}>
          <img src={pancakeswap} />
        </Grid>
        <Grid
          lg={12}
          md={12}
          sm={12}
          xs={12}
          padding={"30px 0px"}
          style={{ borderBottom: "1px solid rgb(56, 50, 65)" }}
        >
          <IconsWrapper>
            <img src={twitter} />
            <img src={ecelator} />
            <img src={reddit} />
            <img src={instagram} />
            <img src={github} />
            <img src={discord} />
            <img src={medium} />
          </IconsWrapper>
        </Grid>
        <Grid lg={5} md={6} sm={12} xs={12} padding={"20px 0px"}></Grid>
      </Grid>
    </Box>
  );
}
