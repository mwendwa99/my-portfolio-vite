import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../redux/reducers/userSlice";
import Lottie from "lottie-react";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
// components
import Modal from "../components/Modal";
// assets
import codework from "../assets/lottie/codework.json";

const token = import.meta.env.VITE_APP_airtableToken;

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

// table object literal
const sections = {
  writeupSection1: "recvVT41fzmT4Gmxc",
};

export default function Landing({ writeups }) {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.title);

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
              {userName || (
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
              {writeups.subtitle || (
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
              {writeups.description || (
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
