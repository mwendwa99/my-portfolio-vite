import React, { useState } from "react";
import { Typography, Container, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import projectSlice, { updateDescription } from "../redux/slices/projectSlice";
// components
import Tabs from "../components/Tabs";

export default function () {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.project.description);
  const [words, setWords] = useState("");

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
          <textarea
            value={words}
            onChange={(e) => setWords(e.target.value)}
            style={{ fontSize: 24, fontWeight: "bolder" }}
          >
            {description}
          </textarea>
          {/* {words} */}
          {description}
          <button onClick={() => dispatch(updateDescription(words))}>
            update description!
          </button>
          {/* <Tabs data={data} /> */}
        </Grid>
      </Grid>
    </Container>
  );
}
