import { useReducer, useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// mui
import { LightModeTwoTone, DarkModeTwoTone } from "@mui/icons-material";
import { Container } from "@mui/material";
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
  // const [state, dispatch] = useReducer(reducer, initialValue);
  const [loading, setLoading] = useState(false);
  const [writeup, setWriteup] = useState({
    intro: {},
    whatIDo: {},
    contact: {},
  });

  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  useEffect(async () => {
    setLoading(true);
    let writeup = await Writeups.all;
    writeup.forEach((item) => {
      setWriteup((prevState) => {
        // create object of item.id and item.data()
        return { ...prevState, [item.id]: item.data() };
      });
    });
    setLoading(false);
  }, []);

  console.log("theme", mode.palette.mode);

  return (
    <ThemeProvider theme={mode}>
      <CssBaseline />
      <Navbar theme={mode} changeTheme={dispatch} />
      <Container maxWidth="md">
        <Landing loading={loading} writeups={writeup.intro} />
        <Divider label="What I Do" icon={<LaptopTwoTone fontSize="medium" />} />
        <WhatIDo />
        <Divider
          label="Projects"
          icon={<AccountTreeTwoTone fontSize="medium" />}
        />
        <Projects />
      </Container>
    </ThemeProvider>
  );
}

export default App;
