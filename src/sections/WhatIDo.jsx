import { Container, Box, Grid, Typography } from "@mui/material";
import { ReactSVG } from "react-svg";
// components
import Svg from "../components/Svg";
// assets
import deploy from "../assets/svg/deploy.svg";
import build from "../assets/svg/build.svg";
import design from "../assets/svg/design.svg";
export default function WhatIDo() {
  return (
    <Container maxWidth="md">
      <Box my={4} py={2}>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={4} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700 }}
              component="h1"
            >
              Design
            </Typography>
            <img src={design} height={300} width="100%" alt="" />
            <Typography
              variant="body1"
              gutterBottom
              align="center"
              component="p"
            >
              I conceptualize an idea into beautiful ui and great user
              experience.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700 }}
              component="h1"
            >
              Build
            </Typography>
            <img src={build} height={300} width="100%" alt="" />
            <Typography
              variant="body1"
              gutterBottom
              align="center"
              component="p"
            >
              I identify, test and build software from the ground up in modern
              web technologies.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700 }}
              component="h1"
            >
              Deploy
            </Typography>
            <img src={deploy} height={300} width="100%" alt="" />
            <Typography
              variant="body1"
              gutterBottom
              align="center"
              component="p"
            >
              I monitor cloud maintenance, planning, security and usage across
              the company
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
