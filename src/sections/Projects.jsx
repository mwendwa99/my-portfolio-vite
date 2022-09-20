import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
// redux
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../redux/slices/projectSlice";
// components
import Carousel from "../components/Carousel";

export default function () {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.all);

  console.log("projo", projects);

  useEffect(() => {
    dispatch(getProjects());
  }, []);

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
