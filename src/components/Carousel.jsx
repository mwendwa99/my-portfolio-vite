import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Typography,
  CircularProgress,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import styled from "styled-components";

const CarouselSwitcher = styled.section`
  @media screen and (max-width: 768px) {
    .carousel: {
      display: none;
    }
  }
`;

const getWindowSize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return { height, width };
};

console.log("sdds", getWindowSize());

export default function Example({ projects }) {
  return (
    <CarouselSwitcher>
      <Carousel duration={300} animation="slide" swipe fullHeightHover={false}>
        {typeof projects !== "undefined" ? (
          projects.map((item, i) => (
            <Item key={i} item={item} projects={projects} />
          ))
        ) : (
          <Paper
            sx={{
              height: 300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={100} color="inherit" />
          </Paper>
        )}
      </Carousel>
    </CarouselSwitcher>
  );
}

function Item(props) {
  return (
    <Paper sx={{ height: "100%", p: 2 }}>
      <Grid container spacing={1} sx={{ pr: 2, pl: 2 }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              borderRadius: 5,
              boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
            }}
            height={250}
            width={300}
            src={props.item.image}
            alt={props.item.title}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              position: "relative",
            }}
          >
            <Typography variant="h6">{props.item.title}</Typography>
            <Typography variant="body1">{props.item.description}</Typography>
          </Box>
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "bold", fontSize: 11 }}
          >
            Stack: {props.item.stack}
          </Typography>
          <br />
          <Button
            style={{ alignSelf: "center" }}
            href={props.item.url}
            target="_blank"
            variant="contained"
            color="secondary"
          >
            Check it out!
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
