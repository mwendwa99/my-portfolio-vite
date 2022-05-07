import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Skeleton,
  CircularProgress,
  Typography,
} from "@mui/material";
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

export default function Landing() {
  const [data, setData] = useState({
    title: (
      <Skeleton
        variant="text"
        width={300}
        animation="pulse"
        sx={{ m: 0, p: 0 }}
      />
    ),
    subtitle: (
      <Skeleton
        variant="text"
        width={300}
        animation="pulse"
        sx={{ m: 0, p: 0 }}
      />
    ),
    description: (
      <Skeleton
        variant="text"
        width={300}
        animation="pulse"
        sx={{ m: 0, p: 0 }}
        height={200}
      />
    ),
    asset: [],
  });
  useEffect(() => {
    axios
      .get(
        `https://api.airtable.com/v0/appJjjwtxcQuzoQcH/images/${sections["writeupSection1"]}`,
        config
      )
      .then((res) => setData(res.data.fields))
      .catch((errors) => {
        console.log(errors);
      });
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
              {data.title}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700 }}
              component="p"
            >
              {data.subtitle}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              color="text.primary"
              align="center"
            >
              {data.description}
            </Typography>
            <Modal />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
