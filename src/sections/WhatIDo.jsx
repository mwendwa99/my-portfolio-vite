import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Box, Grid, Typography, Skeleton } from "@mui/material";
import { getWhatIDo } from "../redux/slices/contentSlice";
// components
import Svg from "../components/Svg";
// assets
import deploy from "../assets/svg/deploy.svg";
import build from "../assets/svg/build.svg";
import design from "../assets/svg/design.svg";

export default function WhatIDo() {
  const dispatch = useDispatch();
  const whatido = useSelector((state) => state.content.whatido);

  console.log("whatido", whatido);

  useEffect(() => {
    dispatch(getWhatIDo());
  }, []);

  const renderWhatIdo = (whatido) => {
    whatido ? (
      whatido.data.map((item, index) => {
        <Typography
          key={index}
          variant="h6"
          gutterBottom
          align="center"
          sx={{ fontWeight: 700, textAlign: "center" }}
          component="h1"
        >
          {item.title}
        </Typography>;
      })
    ) : (
      <Skeleton
        variant="text"
        width={100}
        animation="pulse"
        sx={{ m: 0, p: 0 }}
      />
    );
  };

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
            {renderWhatIdo()}
            {/* <p>{JSON.stringify(whatido.data)}</p> */}
            {/* {whatido.data.map((item, index) => {
              <Typography
                key={index}
                variant="h6"
                gutterBottom
                align="center"
                sx={{ fontWeight: 700, textAlign: "center" }}
                component="h1"
              >
                {item.title || (
                  <Skeleton
                    variant="text"
                    width={100}
                    animation="pulse"
                    sx={{ m: 0, p: 0 }}
                  />
                )}
              </Typography>;
            })} */}
            {/* <Typography
              variant="h6"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700, textAlign: "center" }}
              component="h1"
            >
              {whatido.title || (
                <Skeleton
                  variant="text"
                  width={100}
                  animation="pulse"
                  sx={{ m: 0, p: 0 }}
                />
              )}
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
            </Typography> */}
          </Grid>
          {/* <Grid item xs={12} sm={4} md={4}>
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
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
}
