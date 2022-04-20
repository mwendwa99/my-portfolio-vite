import { Typography, Container, Grid } from "@mui/material";
// components
import Tabs from "../components/Tabs";
// api
import data from "../api/projects";

export default function () {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            align="center"
            gutterBottom
            variant="subtitle1"
            sx={{ fontWeight: 700, mt: 2 }}
          >
            Here are some projects I have worked on.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Tabs data={data} />
        </Grid>
      </Grid>
    </Container>
  );
}
