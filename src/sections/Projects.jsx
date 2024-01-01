import React, { useEffect, Suspense } from "react";
import { Container, Grid } from "@mui/material";
// redux
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../redux/slices/projectSlice";
// components
const Carousel = React.lazy(() => import("../components/Carousel"));

export default function () {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.data);

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <Container id="projects" maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Suspense fallback={<div>Loading...</div>}>
            <Carousel projects={Object.values(projects)} />
          </Suspense>
        </Grid>
      </Grid>
    </Container>
  );
}
