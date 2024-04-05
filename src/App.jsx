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

      <NavBar theme={theme} changeTheme={dispatch} />
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Landing />
        <Divider label="What I Do" icon={<LaptopTwoTone fontSize="medium" />} />
        <WhatIDo />
        <Divider
          label="Projects"
          icon={<AccountTreeTwoTone fontSize="medium" />}
        />
        <Projects theme={theme} />
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
