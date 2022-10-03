import { Box, Container, Typography, Divider, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/material";
import {
  Copyright,
  GitHub,
  LinkedIn,
  Mail,
  Twitter,
} from "@mui/icons-material";

const useStyle = makeStyles({
  Links: {
    textDecoration: "none",
  },
});

export default function Contact() {
  return (
    <Box id="contact">
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} sm={5} sx={{ pt: 1 }}>
          <Stack
            direction="column"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link href="https://wakatime.com/@2aba1a8d-1c0f-4cb2-8d62-adf66b362996">
              <img
                src="https://wakatime.com/badge/user/2aba1a8d-1c0f-4cb2-8d62-adf66b362996.svg"
                alt="Total time coded since Oct 23 2021"
              />
            </Link>
            <Link
              underline="hover"
              href="https://github.com/mwendwa99"
              target="_blank"
              rel="noopener noreferrer"
              variant="body1"
              color="inherit"
            >
              <Stack direction="row">
                <GitHub />
                <Typography variant="body1" align="center" gutterBottom>
                  &nbsp;@mwendwa99
                </Typography>
              </Stack>
            </Link>
            <Link
              underline="hover"
              href="https://www.linkedin.com/in/brian-mwendwa-25326a173/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <Stack direction="row">
                <LinkedIn />
                <Typography variant="body1" align="center" gutterBottom>
                  &nbsp;Brian Mwendwa
                </Typography>
              </Stack>
            </Link>
            <Link
              underline="hover"
              href="https://twitter.com/mwendwa_atl"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <Stack direction="row">
                <Twitter />
                <Typography variant="body1" align="center" gutterBottom>
                  &nbsp; @mwendwa_atl
                </Typography>
              </Stack>
            </Link>
            <Link
              underline="hover"
              href="mailto:brianmwendwa.mu@gmail.com?subject = Feedback&body = Message"
              rel="noopener noreferrer"
              color="inherit"
            >
              <Stack direction="row">
                <Mail fontSize="small" />
                <Typography variant="body1" align="center" gutterBottom>
                  &nbsp; Brian mwendwa
                </Typography>
              </Stack>
            </Link>
            <Link
              underline="hover"
              href="mailto:brianmwendwa.mu@gmail.com?subject = Feedback&body = Message"
              rel="noopener noreferrer"
              color="inherit"
            >
              <Stack direction="row">
                <Copyright fontSize="small" />
                <Typography variant="body1" align="right" gutterBottom>
                  {new Date().getFullYear()} Brian Mwendwa.
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
