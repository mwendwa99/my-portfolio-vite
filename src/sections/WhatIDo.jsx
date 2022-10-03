import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWhatIDo } from "../redux/slices/contentSlice";
import { Container, Box, Grid, Typography, Skeleton } from "@mui/material";

export default function WhatIDo() {
  const dispatch = useDispatch();
  const whatido = useSelector((state) => state.content.whatido);

  useEffect(() => {
    dispatch(getWhatIDo());
  }, []);

  const isEmpty = (object) => {
    if (Object.keys(object).length === 0) {
      return true;
    } else if (whatido.data.length > 0) {
      return false;
    }
  };
  return (
    <Container id="whatido" maxWidth="md">
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
          {isEmpty(whatido) === false ? (
            whatido.data.map((item, index) => (
              <Grid key={index} item xs={12} sm={4} md={4}>
                <Typography
                  variant="h6"
                  gutterBottom
                  align="center"
                  sx={{ fontWeight: 700, textAlign: "center" }}
                  component="h1"
                >
                  {item.title}
                  <img
                    src={item.image}
                    height={300}
                    width="100%"
                    alt="skills"
                  />
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  align="center"
                  component="p"
                >
                  {item.description}
                </Typography>
              </Grid>
            ))
          ) : (
            <Skeleton
              variant="text"
              width={100}
              animation="pulse"
              sx={{ m: 0, p: 0 }}
            />
          )}
        </Grid>
      </Box>
    </Container>
  );
}
