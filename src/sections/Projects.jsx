import React from "react";
import { Typography, Container, Grid } from "@mui/material";
// components
import Carousel from "../components/Carousel";

export default function () {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Carousel />
        </Grid>
      </Grid>
    </Container>
  );
}
