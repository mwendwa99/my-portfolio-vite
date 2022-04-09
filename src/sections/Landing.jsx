import React, {useState} from 'react';
import { Box, Container, Grid, Typography, Fab, Divider } from "@mui/material";
import { DocumentScannerTwoTone } from "@mui/icons-material";
import Lottie from "lottie-react";
// import { Document, Page } from "react-pdf";
import { Document, Page } from 'react-pdf/dist/esm/entry.parcel';
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { pdfjs } from 'react-pdf'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

// assets
import codework from "../assets/lottie/codework.json";
import resume from "../assets/documents/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
  workerSrc: 'pdfjs-dist/build/pdf.worker.js',
};

export default function Landing() {
  const [file, setFile] = useState(resume);
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

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
              textAlign:'center'
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
            <Fab
              variant="extended"
              color="secondary"
              size="large"
              sx={{ m: 2, p: 2 }}
            >
              <DocumentScannerTwoTone fontSize="medium" sx={{ mr: 1 }} />
              View Resume
            </Fab>
            <div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
          </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" />
    </Container>
  );
}
