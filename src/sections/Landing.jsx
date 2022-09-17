import React, { useEffect } from "react";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAbout } from "../redux/slices/contentSlice";
import Lottie from "lottie-react";
import "react-loading-skeleton/dist/skeleton.css";
// components
import Modal from "../components/Modal";
// assets
import codework from "../assets/lottie/codework.json";

export default function Landing() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.content.data);

  useEffect(() => {
    dispatch(getAbout());
  }, []);

  return (
    <Container maxWidth="md">
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
          <Grid item xs={12} sm={6}>
            <Lottie animationData={codework} loop={true} autoplay={true} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700 }}
              component="h1"
            >
              {data.title || (
                <Skeleton
                  variant="text"
                  width={300}
                  animation="pulse"
                  sx={{ m: 0, p: 0 }}
                />
              )}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700 }}
              component="p"
            >
              {data.subtitle || (
                <Skeleton
                  variant="text"
                  width={300}
                  animation="pulse"
                  sx={{ m: 0, p: 0 }}
                />
              )}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              color="text.primary"
              align="center"
            >
              {data.description || (
                <Skeleton
                  variant="text"
                  width={300}
                  animation="pulse"
                  sx={{ m: 0, p: 0 }}
                  height={200}
                />
              )}
            </Typography>
            <Modal />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
