import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { admin } from "./redux/slices/themeSlice";
import { useAuth0 } from "@auth0/auth0-react";
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
import Contact from "./sections/Contact";

function App() {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const theme = createTheme(useSelector((state) => state.theme.mode));
  // check if user is logged in then change theme
  useEffect(() => {
    isAuthenticated ? dispatch(admin()) : null;
  }, [isAuthenticated, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        isAuthenticated={isAuthenticated}
        theme={theme}
        changeTheme={dispatch}
      />
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Landing />
        <Divider
          id="whatido"
          label="What I Do"
          icon={<LaptopTwoTone fontSize="medium" />}
        />
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
