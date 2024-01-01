import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Typography,
  CircularProgress,
  Grid,
  Box,
} from "@mui/material";

const MyCarousel = React.memo(({ projects }) => {
  return (
    <Carousel interval={5000} animation="slide" swipe>
      {typeof projects !== "undefined" ? (
        projects.map((item, i) => (
          <Item key={i} item={item} projects={projects} />
        ))
      ) : (
        <Paper
          sx={{
            height: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} color="inherit" />
        </Paper>
      )}
    </Carousel>
  );
});

export default MyCarousel;

function Item(props) {
  return (
    <Paper sx={{ height: { xs: 700, sm: 400 }, p: 2 }}>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            style={{
              borderRadius: 5,
              boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
              cursor: "pointer",
            }}
            height={"100%"}
            width={"100%"}
            src={props.item.image}
            alt={props.item.title}
            onClick={() => window.open(props.item.url, "_blank")}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
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
          <Button
            sx={{ marginTop: 2, backgroundColor: "#f50057" }}
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
