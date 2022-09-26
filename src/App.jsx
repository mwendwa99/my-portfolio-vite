import { useReducer } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
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
import Navbar from "./components/NavBar";
import Divider from "./components/Divider";
// sections
import Landing from "./sections/Landing";
import WhatIDo from "./sections/WhatIDo";
import Projects from "./sections/Projects";

function App() {
  const dispatch = useDispatch();
  const theme = createTheme(useSelector((state) => state.theme.mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar theme={theme} changeTheme={dispatch} />
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
