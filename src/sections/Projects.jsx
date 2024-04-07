import React, { useEffect, Suspense } from "react";
import { Container, Grid } from "@mui/material";
// redux
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../redux/slices/projectSlice";
// components
const Card = React.lazy(() => import("../components/Card"));

export default function Projects({ theme }) {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.data);

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  // console.log(projects);

  return (
    <Container id="projects" maxWidth="md" className="my-5">
      <Grid container spacing={3}>
        <Suspense fallback={<div>Loading...</div>}>
          {projects &&
            projects.map((project, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card theme={theme} project={project} />
              </Grid>
            ))}
        </Suspense>
      </Grid>
    </Container>
  );
}
