import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

// mui
import { Container, createTheme } from "@mui/material";
import {
  LaptopTwoTone,
  AccountTreeTwoTone,
  ConnectWithoutContactTwoTone,
} from "@mui/icons-material";
// theme
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// components
import { NavBar, Divider } from "./components";
// sections
import { Landing, WhatIDo, Projects, Contact } from "./sections";

function App() {
  const dispatch = useDispatch();
  const theme = createTheme(useSelector((state) => state.theme.mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        {/* Common SEO meta tags */}
        <title>Brian MWendwa</title>
        <meta
          name="description"
          content="Software Developer with 3 years of experience in web technologies."
        />
        <meta name="author" content="Brian Mwendwa" />
        <meta name="keywords" content="Web Developer, Portfolio, React" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Brian MWendwa" />
        <meta
          property="og:description"
          content="Software Engineer React|TypeScript|JavaScript|Python|SQL|Express|Django|Firebase|MongoDb"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mwendwa.netlify.app" />
        <meta
          property="og:image"
          content="URL to your logo or featured image"
        />
        <meta property="og:site_name" content="https://mwendwa.netlify.app/" />

        {/* Twitter card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mwendwa_atl" />
        <meta name="twitter:title" content="Brian Mwendwa" />
        <meta
          name="twitter:description"
          content="Software Engineer React|TypeScript|JavaScript|Python|SQL|Express|Django|Firebase|MongoDb"
        />
        <meta
          name="twitter:image"
          content="https://media.licdn.com/dms/image/D4D03AQE_X1kfBgk8Kg/profile-displayphoto-shrink_400_400/0/1692985343329?e=1709769600&v=beta&t=BqCirXJefw0ViJ6zRQVYsXwptF7HfevQztTe_wiuPYY"
        />
      </Helmet>
      <NavBar theme={theme} changeTheme={dispatch} />
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Landing />
        <Divider label="What I Do" icon={<LaptopTwoTone fontSize="medium" />} />
        <WhatIDo />
        <Divider
          label="Projects"
          icon={<AccountTreeTwoTone fontSize="medium" />}
        />
        <Projects />
        <Divider
          label="Contact"
          icon={<ConnectWithoutContactTwoTone fontSize="medium" />}
        />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}

export default App;
