import { useReducer, useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// mui
import { LightModeTwoTone, DarkModeTwoTone } from "@mui/icons-material";
import { Container, createTheme } from "@mui/material";
import { LaptopTwoTone, AccountTreeTwoTone } from "@mui/icons-material";
// theme
import { darkMode, lightMode } from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// components
import Navbar from "./components/NavBar";
import Divider from "./components/Divider";
// sections
import Landing from "./sections/Landing";
import WhatIDo from "./sections/WhatIDo";
import Projects from "./sections/Projects";

function App() {
  const dispatch = useDispatch();
  const theme = createTheme(useSelector((state) => state.theme.mode));
  // console.log("va", theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar theme={theme} changeTheme={dispatch} />
      {/* <Container maxWidth="md">
        <Landing loading={loading} writeups={writeup.intro} />
        <Divider label="What I Do" icon={<LaptopTwoTone fontSize="medium" />} />
        <WhatIDo />
        <Divider
          label="Projects"
          icon={<AccountTreeTwoTone fontSize="medium" />}
        />
        <Projects />
      </Container> */}
    </ThemeProvider>
  );
}

export default App;
