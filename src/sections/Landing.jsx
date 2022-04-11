import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { DocumentScannerTwoTone } from "@mui/icons-material";
import Lottie from "lottie-react";
// components
import Modal from "../components/Modal";

// assets
import codework from "../assets/lottie/codework.json";
import resume from "../assets/documents/resume.pdf";

export default function Landing() {
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
              Brian Mwendwa
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              sx={{ fontWeight: 700 }}
              component="p"
            >
              ( Artist / Developer / Designer )
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              color="text.primary"
              align="center"
            >
              Brian is a software developer and freelancer located in Nairobi
              with a passion for creating digital services. He excels at all
              aspects of product launch, from planning and design to solving
              real-world challenges with code. When he is not online, he loves
              and appreciates works of art and beautiful things.
            </Typography>
            <Modal
              title="View Resume"
              data={resume}
              icon={
                <DocumentScannerTwoTone fontSize="medium" sx={{ mr: "auto" }} />
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
