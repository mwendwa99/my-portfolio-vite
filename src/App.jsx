import { useReducer } from "react";
import "./App.css";
// mui
import { LightModeTwoTone, DarkModeTwoTone } from "@mui/icons-material";
import { Container } from "@mui/material";
import { LaptopTwoTone } from "@mui/icons-material";
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

const initialValue = {
  theme: lightMode,
  icon: <DarkModeTwoTone />,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "light":
      return {
        ...state,
        theme: lightMode,
        icon: <LightModeTwoTone />,
      };
      break;

    case "dark":
      return {
        ...state,
        theme: darkMode,
        icon: <DarkModeTwoTone />,
      };
      break;

    default:
      return { initialValue };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <ThemeProvider theme={state.theme}>
      <CssBaseline />
      <Navbar icon={state.icon} theme={state.theme} changeTheme={dispatch} />
      <Container maxWidth="md">
        <Landing />
        <Divider label="What I Do" icon={<LaptopTwoTone fontSize="medium" />} />
        <WhatIDo />
      </Container>
    </ThemeProvider>
  );
}

export default App;
