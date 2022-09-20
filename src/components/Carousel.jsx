import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";

export default function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      stopAutoPlayOnHover
      duration={300}
      animation="slide"
      swipe
      navButtonsAlwaysVisible
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper sx={{ height: 300 }}>
      <Typography variant="h2">{props.item.name}</Typography>
      <Typography variant="body1">{props.item.description}</Typography>
      <Button variant="contained">Check it out!</Button>
    </Paper>
  );
}
