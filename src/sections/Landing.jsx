import React, { useEffect, Suspense } from "react";
import {
  Box,
  Container,
  Grid,
  Skeleton,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAbout } from "../redux/slices/contentSlice";
import Lottie from "lottie-react";
import "react-loading-skeleton/dist/skeleton.css";
// components
const Modal = React.lazy(() => import("../components/Modal"));
// assets
import codework from "../assets/lottie/codework.json";

export default function Landing() {
  const dispatch = useDispatch();
  const about = useSelector((state) => state.content.about);

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
            <Suspense
              fallback={
                <Skeleton
                  variant="text"
                  width={300}
                  animation="pulse"
                  sx={{ m: 0, p: 0 }}
                />
              }
            >
              <Typography
                variant="h5"
                gutterBottom
                align="center"
                sx={{ fontWeight: 700 }}
                component="h1"
              >
                {about.title}
              </Typography>
            </Suspense>
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700, fontSize: 12 }}
              component="p"
            >
              {about.subtitle || (
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
              {about.description || (
                <Skeleton
                  variant="text"
                  width={300}
                  animation="pulse"
                  sx={{ m: 0, p: 0 }}
                  height={200}
                />
              )}
            </Typography>
            <Suspense fallback={<CircularProgress color="primary" size="md" />}>
              <Modal />
            </Suspense>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
